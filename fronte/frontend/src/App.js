import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import ItemComponent from './components/ItemComponent';
import AppBar from './components/AppBar';
import { Routes, Route } from 'react-router-dom';
import MyAccounts from './pages/MyAccount';
import DrawerComponent from './components/Drawer';
import AppBarWithoutSearch from './components/AppBarWithoutSearch';
import { getCurrentUser } from './components/APIUtils';
import { ACCESS_TOKEN } from './index';
import Login from './components/Login';

import Profile from './components/Profile';
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
    this.loadHandler = this.loadHandler.bind(this);
  }

  loadCurrentlyLoggedInUser() {
    console.log('called it');
    getCurrentUser()
      .then((response) => {
        this.setState({
          currentUser: response,
          authenticated: true,
          loading: false,
        });
        console.log(response);
      })
      .catch((error) => {
        this.setState({
          loading: false,
        });
      });
  }

  loadHandler() {
    this.setState({
      authenticated: true,
    });
  }

  handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      authenticated: false,
      currentUser: null,
    });
    console.log('your out');
  }

  componentDidMount() {
    this.loadCurrentlyLoggedInUser();
  }

  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<AppBar />} />
          <Route path="/items" element={<AppBar />} />
          <Route
            path="myAccount"
            element={
              <>
                <AppBarWithoutSearch /> <MyAccounts />
              </>
            }
          />
          <Route
            path="profile"
            element={
              <>
                <AppBarWithoutSearch /> <MyAccounts />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <AppBarWithoutSearch />{' '}
                <Login
                  authenticated={this.state.authenticated}
                  handler={this.loadHandler}
                  onLogout={this.handleLogout}
                  currentUser={this.loadCurrentlyLoggedInUser}
                />
              </>
            }
          />
          <Route
            path="/profile"
            authenticated={this.state.authenticated}
            currentUser={this.state.currentUser}
            component={Profile}
          ></Route>
        </Routes>
      </div>
    );
  }
}
export default App;
