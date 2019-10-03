import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './views/home-page/homepage.component';
import ShopPage from './views/shop-page/shop.component';
import LoginPage from './views/login-page/login-page.component';

import Header from './components/header/header.component';

import './App.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
        <Route exact path="/login" component={LoginPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
