import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './views/home-page/homepage.component';
import ShopPage from './views/shop-page/shop.component';
import LoginPage from './views/login-page/login-page.component';
import Header from './components/header/header.component';

import { auth } from './firebase/firebase.utils';

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
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
