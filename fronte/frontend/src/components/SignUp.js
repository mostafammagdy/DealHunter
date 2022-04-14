import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import '../styles/SignForm.css';
import { Box } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import { Paper } from '@material-ui/core';

const Item = styled(Paper)(({ theme }) => ({


 
  

}));


export default function SignUp(props) {
  
  const handleClickOpen = () => {
    props.setOpenBox(true);
  };

  const handleClose = () => {
    props.setOpenBox(false);
  };
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [city, setCity] = React.useState('');
  const [postalCode, setPostCode] = React.useState('');

 
  


  return (
    <div >
     
      <Dialog open={props.openBox} onClose={props.setOpenBox} fullWidth="md"  sx={{
    '& .css-tlc64q-MuiPaper-root-MuiDialog-paper' : {
      overflow: 'hidden',
    },
  }}>
        <DialogTitle style = {{"text-align":"center"}}>Sign Up</DialogTitle>
        <form className="signForm" style={{'width':'100%'}}>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
        
    <Grid item xs={6} style = {{'padding-left':"50px"}}>
      
      <TextField
        label="First Name"
        variant="filled"
        required
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        margin="normal"
        autoComplete="new-password"
      
       
      />
     
      
      <TextField
        label="Last Name"
        variant="filled"
        required
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        margin="normal"
        autoComplete="new-password"
      />
      
    
      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        margin="normal"
        autoComplete="new-password"
      />
      
      
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
        margin="normal"
        autoComplete="new-password"
      />
     
      </Grid>
      <Grid item xs={6} style = {{'padding-left':"30px"}}>
        
       <TextField
        label="Street Address"
        variant="filled"
        type="address"
        required
        value={address}
        onChange={e => setAddress(e.target.value)}
        margin="normal"
        autoComplete="new-password"
      />
    
      <TextField
        label="Country"
        variant="filled"
        type="country"
        required
        value={country}
        onChange={e => setCountry(e.target.value)}
        margin="normal"
        autoComplete="new-password"
      />
   
      <TextField
        label="City"
        variant="filled"
        type="address"
        required
        value={city}
        onChange={e => setCity(e.target.value)}
        margin="normal"
        autoComplete="new-password"
      />
    
      <TextField
        label="Postal Code"
        variant="filled"
        type="address"
        required
        value={postalCode}
        onChange={e => setPostCode(e.target.value)}
        margin="normal"
        autoComplete="new-password"
      />
     
      
      </Grid>
      </Grid>
      </Box>
       <Stack spacing={2} direction="row" style={{marginTop:"15px"}}>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary" >
          Sign Up
        </Button>
    </Stack>
        </form>
      </Dialog>
    </div>
  );
}

