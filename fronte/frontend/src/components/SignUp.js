import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@material-ui/core';
import '../styles/SignForm.css';


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
  

 
  


  return (
    <div >
     
      <Dialog open={props.openBox} onClose={props.setOpenBox}>
        <DialogTitle>Sign Up</DialogTitle>
        <form className="signForm" >
      <TextField
        label="First Name"
        variant="filled"
        required
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        margin="normal"
       
      />
      <TextField
        label="Last Name"
        variant="filled"
        required
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
        margin="normal"
      />
       <Stack spacing={2} direction="row" style={{marginTop:"20px"}}>
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

