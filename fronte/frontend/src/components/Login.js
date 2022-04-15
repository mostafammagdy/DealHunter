import React, { useState, Component } from 'react';
import { useDispatch } from 'react-redux';
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
import { connect } from 'react-redux';
import { authenticateUser } from '../service/index.js';
import { Redirect } from 'react-router';

class Login extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = this.initialState;
  }

  initialState = {
    email: 'test@gmail.com',
    password: 'test',
  };

  validateUser = () => {
    this.props.authenticateUser(this.state.email, this.state.password);
    setTimeout(() => {
      if (this.props.auth.isLoggedIn) {
        this.props.history.push('/yeet');
      } else {
        console.log('error');
      }
    }, 500);
  };

  /*  handleSubmit = async (event) => {
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
*/

  render() {
    const currentUser = this.props.currentUser;
    return (
      <div>
        <h1>Login Page </h1>
        {this.props.auth.isLoggedIn ? (
          <div>
            <p>we here </p>
          </div>
        ) : (
          <div>
            <p>we not here </p>
          </div>
        )}
        <TextField
          label="Email"
          variant="filled"
          type="email"
          required
          margin="normal"
        />
        <TextField
          label="Password"
          variant="filled"
          type="password"
          required
          margin="normal"
        />
        <Stack spacing={2} direction="row" style={{ marginTop: '20px' }}>
          <Button variant="contained">Cancel</Button>
          <div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginlLeft: '5px' }}
              //onClick={this.handleSubmit}
              onClick={this.validateUser}
            >
              Sign In
            </Button>
          </div>
        </Stack>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authenticateUser: (email, password) =>
      dispatch(authenticateUser(email, password)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
