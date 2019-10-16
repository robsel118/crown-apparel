import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './views/home-page/homepage.component';
import ShopPage from './views/shop-page/shop.component';
import LoginPage from './views/login-page/login-page.component';
import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';
import 'antd/dist/antd.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          //must call .data to get any information
          this.setState({
            currentUser: { id: snapshot.id, ...snapshot.data() }
          });
        });
      } else {
        this.setState({ currentUser: null });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/shop" component={ShopPage}></Route>
          <Route exact path="/login" component={LoginPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
