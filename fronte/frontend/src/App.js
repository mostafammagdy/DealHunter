import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Fetchh from './components/Fetchh';
import ItemComponent from './components/ItemComponent';
import AppBar from './components/AppBar';

import MyAccounts from './pages/MyAccount';
import DrawerComponent from './components/Drawer';
import { useState, useRef, useEffect } from 'react';
import { Card, Footer, Header } from './components/FooterStyles';
import AppBarWithoutSearch from './components/AppBarWithoutSearch';
import CheckoutFunction from './pages/CheckoutFunction';
import BrandComponent from './components/BrandComponent';
import TypeComponent from './components/TypeComponent';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import { getCurrentUser } from './components/APIUtils';
import { ACCESS_TOKEN } from './components/index';
import Login2 from './components/Login2';
import Profile from './components/Profile';
import LoadingIndicator from './components/LoadingIndicator';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: true,
    };

    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handler = this.handler.bind(this);
  }

  loadCurrentlyLoggedInUser() {
    getCurrentUser()
      .then((response) => {
        console.log(response);
        this.setState({
          currentUser: response,
          authenticated: true,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
        });
      });
  }

  handler() {
    this.setState({
      currentUser: this.state.currentUser,
      authenticated: true,
      loading: false,
    });
  }

  handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      authenticated: false,
      currentUser: null,
    });
    console.log("You're safely logged out!");
  }

  componentDidMount() {
    this.loadCurrentlyLoggedInUser();
  }

  render() {
    if (this.state.loading) {
      return <LoadingIndicator />;
    }
    return (
      <div className="App">
        <Switch>
          <Route
            path="/login"
            render={(props) => (
              <Login2 authenticated={this.state.authenticated} {...props} />
            )}
          ></Route>
          <Route
            path="/profile"
            render={(props) => (
              <Profile
                authenticated={this.state.authenticated}
                currentUser={this.state.currentUser}
                {...props}
              />
            )}
          ></Route>
          <Route
            path="/checkout"
            render={(props) => (
              <CheckoutFunction
                authenticated={this.state.authenticated}
                currentUser={this.state.currentUser}
                {...props}
              />
            )}
          ></Route>
          <Route
            path="/"
            render={(props) => (
              <Fetchh
                authenticated={this.state.authenticated}
                currentUser={this.state.currentUser}
                {...props}
              />
            )}
          ></Route>
          <Route path="/items" render={(props) => <Fetchh />}>
            {' '}
          </Route>
          <Route path="/myAccount" render={(props) => <MyAccounts />}></Route>
          <Route
            path="/items/brands"
            render={(props) => <BrandComponent />}
          ></Route>
          <Route
            path="/items/types"
            render={(props) => <TypeComponent />}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
