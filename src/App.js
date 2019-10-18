import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './views/home-page/homepage.component';
import ShopPage from './views/shop-page/shop.component';
import LoginPage from './views/login-page/login-page.component';
import CheckoutPage from './views/checkout/checkout.component';
import Header from './components/header/header.component';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';
import 'antd/dist/antd.css';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          //must call .data to get any information
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route
            exact
            path="/login"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <LoginPage />
            }
          ></Route>
          <Route exact path="/checkout" component={CheckoutPage}></Route>
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);