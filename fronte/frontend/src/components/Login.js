import React, { Component } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@material-ui/core';
import '../styles/SignForm.css';
import axios from 'axios';
import { login } from './APIUtils';
import { API_BASE_URL, ACCESS_TOKEN } from '../index.js';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeS1 = this.handleChangeS1.bind(this);
    this.handleChangeS2 = this.handleChangeS2.bind(this);
    this.getUserDetails = this.getUserDetails.bind(this);
  }

  handleChangeS1 = (e) => {
    this.setState({ email: e.target.value });
  };
  handleChangeS2 = (e) => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = async (event) => {
    // event.preventDefault();
    const loginRequest = Object.assign({}, this.state);

    login(loginRequest)
      .then((response) => {
        //     this.props.history.push('/profile2');
        console.log(response);
        localStorage.setItem(ACCESS_TOKEN, response.accessToken);
        console.log(response.accessToken);
        console.log("You're successfully logged in!");
        this.props.handler();
      })
      .catch((error) => {
        console.log('ERROR: ', error);
      });
  };

  getUserDetails = () => {
    fetch(API_BASE_URL + '/user/me', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      //  .then((response) => {
      //     console.log('RESPONSE', response.getText()); // <- Your User Details here.
      //   })
      .then((response) => response.json())
      .catch((error) => {
        console.log('ERROR: ', error);
      });
  };

  render() {
    const currentUser = this.props.currentUser;
    return (
      <div>
        <h1>Login Page </h1>
        <TextField
          label="Email"
          variant="filled"
          type="email"
          required
          margin="normal"
          onChange={this.handleChangeS1}
        />
        <TextField
          label="Password"
          variant="filled"
          type="password"
          required
          margin="normal"
          onChange={this.handleChangeS2}
        />
        <Stack spacing={2} direction="row" style={{ marginTop: '20px' }}>
          <Button variant="contained">Cancel</Button>
          {this.props.authenticated ? (
            <div>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ marginlLeft: '5px' }}
                onClick={this.handler}
              >
                Authenticated button
              </Button>
            </div>
          ) : (
            <div>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ marginlLeft: '5px' }}
                onClick={this.handleSubmit}
              >
                Sign In
              </Button>
            </div>
          )}
          {this.props.authenticated ? (
            <div>
              <p>This is authenticated state{this.props.currentUser}</p>

              <Button onClick={this.currentUser}>
                {' '}
                Click to get current User
              </Button>
            </div>
          ) : (
            <div>
              <p>This is NOT authenticated state</p>
            </div>
          )}
        </Stack>
      </div>
    );
  }
}
