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
import { signup } from './APIUtils';
import { ACCESS_TOKEN } from '../index';

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeS1 = this.handleChangeS1.bind(this);
    this.handleChangeS2 = this.handleChangeS2.bind(this);
  }

  handleChangeS1 = (e) => {
    this.setState({ email: e.target.value });
  };
  handleChangeS2 = (e) => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = async () => {
    const signUpRequest = Object.assign({}, this.state);
    signup(signUpRequest)
      .then((response) => {
        console.log(
          "You're successfully registered. Please login to continue!"
        );
        this.props.history.push('/myAccount');
      })
      .catch((error) => {
        console.log(
          'Oops! Something went wrong. Please try again! This email is already registered'
        );
      });
    /*
    console.log('yes');
    const articles = {
      username: this.state.username,
      password: this.state.password,
    };
    console.log(this.state.username);
    await axios
      .post('http://localhost:8080/users/login', articles)
      .then((data) => {
        console.log(data);
        console.log(data);
        console.log(typeof data);
        var firstKey = data.data;
        console.log(typeof firstKey);
        if (firstKey === 'SUCCESS') {
          console.log('we getting there');
          {
            this.props.handler();
          }
        } else {
          console.log('nope');
        }
      })
      .catch((err) => console.log(err)); */
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Registration Page </h1>

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
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginlLeft: '5px' }}
            >
              New Account
            </Button>
          </Stack>
        </form>
      </div>
    );
  }
}
