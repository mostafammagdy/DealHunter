import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";
import {useEffect} from "react"


var totalPrice = 0;

const products = JSON.parse(localStorage.getItem('cart'))







const useStyles = makeStyles(theme => ({
  listItem: {
    padding: `${theme.spacing.unit}px 0`
  },
  total: {
    fontWeight: "700"
  },
  title: {
    marginTop: theme.spacing.unit * 2
  }
}));

function Review(props) {


    products.map(product=>{
    totalPrice = totalPrice + (product.quantity*product.price)
    console.log(totalPrice)
    })

    const shippingAddress ={
      firstname:localStorage.getItem('firstName'),
      lastname:localStorage.getItem('lastName'),
      address1:localStorage.getItem('address1'),
      address2:localStorage.getItem('address2'),
      city:localStorage.getItem('city'),
      state:localStorage.getItem('state'),
      zip:localStorage.getItem('zip'),
      country:localStorage.getItem('country')
    
    
    
    } 

  

    const payments = [
      { name: "Card type", detail: "Visa" },
      { name: "Card holder", detail: localStorage.getItem('cardName') },
      { name: "Card number", detail: localStorage.getItem('cardNumber') },
      { name: "Expiry date", detail:localStorage.getItem('cvv') }
    ];



  const classes  = useStyles();
  return (
  
    <React.Fragment>
        {console.log(totalPrice)}
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map(product => (
          <ListItem className={classes.listItem} key={product.name} style={{}}>
            <ListItemText primary={product.name} secondary={product.description} />
            <ListItemText style={{"textAlign":"end"}} primary={"$"+product.price} secondary={"Quantity x"+product.quantity} />
            {/* <ListItemText style={{}} primary={product.price} secondary={product.quantity} /> */}
            
            
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            {"$"+totalPrice/2}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={16}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>{shippingAddress.firstname + " "+ shippingAddress.lastname}</Typography>
          <Typography gutterBottom>{shippingAddress.address1 + ", "+ shippingAddress.city + ", "+ shippingAddress.country + ", "+ shippingAddress.zip}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map(payment => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}



export default Review;
