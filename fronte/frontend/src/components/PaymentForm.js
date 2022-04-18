import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useState } from "react";



function PaymentForm() {

const [cardName,setCardName] = useState('')
const [cardNumber,setCardNumber] = useState('')
const [expiryDate,setExpiryDate] = useState('')
const [cvv,setCVV] = useState('')

localStorage.setItem('cardName',cardName)
localStorage.setItem('cardNumber',cardNumber)
localStorage.setItem('expiryDate',expiryDate)
localStorage.setItem('cvv',cvv)


  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" label="Name on card" fullWidth value={cardName}
        onChange={e => setCardName(e.target.value)}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="cardNumber" label="Card number" fullWidth value={cardNumber}
        onChange={e => setCardNumber(e.target.value)}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="expDate" label="Expiry date" fullWidth value={expiryDate}
        onChange={e => setExpiryDate(e.target.value)}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            value={cvv}
        onChange={e => setCVV(e.target.value)}
          />
        </Grid>
      </Grid>
      </div>
  );
}

export default PaymentForm;
