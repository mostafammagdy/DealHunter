import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useState } from "react";

function ShippingAddress() {

  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [address1,setAddress1] = useState('')
  const [address2,setAddress2] = useState('')
  const [city,setCity] = useState('')
  const [state,setState] = useState('')
  const [zip,setZip] = useState('')
  const [country,setCountry] = useState('')
  
  localStorage.setItem('firstName',firstName)
  localStorage.setItem('lastName',lastName)
  localStorage.setItem('address1',address1)
  localStorage.setItem('address2',address2)
  localStorage.setItem('city',city)
  localStorage.setItem('state',state)
  localStorage.setItem('zip',zip)
  localStorage.setItem('country',country)




  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="fname"
            value={firstName}
        onChange={e => setFirstName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="lname"
            value={lastName}
        onChange={e => setLastName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="billing address-line1"
            value={address1}
        onChange={e => setAddress1(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="billing address-line2"
            value={address2}
        onChange={e => setAddress2(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="billing address-level2"
            value={city}
        onChange={e => setCity(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            value={state}
        onChange={e => setState(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="billing postal-code"
            value={zip}
        onChange={e => setZip(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="billing country"
            value={country}
        onChange={e => setCountry(e.target.value)}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default ShippingAddress;
