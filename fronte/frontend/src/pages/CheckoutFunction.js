import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Paper,
  TextField,
  Button,
  IconButton,
  Box,
  Grid,
} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
class Checkout extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      id: this.props.currentUser.id,
      shippingAddress: '',
      shippingCity: '',
      shippingCountry: '',
      shippingPostalCode: '',
      shippingProvince: '',
    };
    this.handleButton = this.handleButton.bind(this);
    this.handleShippingAddress = this.handleShippingAddress.bind(this);
    this.handleShippingCity = this.handleShippingCity.bind(this);
    this.handleShippingProvince = this.handleShippingProvince.bind(this);
    this.handleShippingPostalCode = this.handleShippingPostalCode.bind(this);
    this.handleShippingCountry = this.handleShippingCountry.bind(this);
  }

  handleShippingAddress = (e) => {
    this.setState({ s1: e.target.value });
  };
  handleShippingCity = (e) => {
    this.setState({ s2: e.target.value });
  };
  handleShippingProvince = (e) => {
    this.setState({ s3: e.target.value });
  };

  handleShippingPostalCode = (e) => {
    this.setState({ s3: e.target.value });
  };

  handleShippingCountry = (e) => {
    this.setState({ s3: e.target.value });
  };

  render() {
    return (
      <div
        style={{
          flex: 9.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F8F8F8',
          height: '100vh',
        }}
      >
        <Paper
          elevation={5}
          style={{ alignItems: 'center', width: 600, height: 600 }}
        >
          <div className="container">
            <div className="profile-info">
              <div className="profile-name"></div>
              <h3>
                Welcome to the checkout, {this.props.currentUser.firstName}{' '}
              </h3>
              <h5>Shipping Information</h5>
              <Grid container spacing={24}>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address Line"
                    fullWidth
                    defaultValue={this.props.currentUser.shippingAddress}
                    autoComplete="billing address-line1"
                    value={this.state.shippingAddress}
                    onChange={this.handleShippingAddress}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    defaultValue={this.props.currentUser.shippingCity}
                    fullWidth
                    autoComplete="billing address-level2"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="state"
                    name="state"
                    label="State/Province/Region"
                    defaultValue={this.props.currentUser.shippingProvince}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip / Postal code"
                    defaultValue={this.props.currentUser.shippingPostalCode}
                    fullWidth
                    autoComplete="billing postal-code"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="country"
                    name="country"
                    label="Country"
                    defaultValue={this.props.currentUser.shippingCountry}
                    fullWidth
                    autoComplete="billing country"
                  />
                </Grid>
              </Grid>

              <form>
                <label>
                  Name:
                  <input type="text" name="name" label="Name" />
                </label>
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default Checkout;
