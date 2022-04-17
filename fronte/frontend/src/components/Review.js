import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import HoverRating from './Rating';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { useState,useContext } from 'react';
import { RatingContext } from '../contexts/rating';

export default function Review({id}) {

  const labels  = {
    
    1: 'Useless+',
    2: 'Poor+', 
    3: 'Ok+',
    4: 'Good+',
    5: 'Excellent+',
  };

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }

  const [value, setValue] = useState(1);
  const [hover, setHover] = useState(-1);
  const [open, setOpen] = React.useState(false);
  const [textReview,setTextReview] = React.useState('')
  const {ratings,setRatings} = useContext(RatingContext)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false)
  
    console.log('helloo')
    
  };

 



   const postReview=async()=>{
const postResponse = await  fetch(`/reviews/item/${id}`,{
  method:'POST',
  headers: {
    'Content-Type': 'application/json'
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: JSON.stringify(data)

})
   const json = await postResponse.json();
   console.log(json)


    fetch(`/reviews/item/${id}`)
    .then(res=>res.json())
    .then(json=>{
    setRatings(json)
    setTextReview('')
    setValue(1)
     setOpen(false)
   
    
    })

  
  }


  localStorage.setItem('textReview',textReview)
  localStorage.setItem('rating',value)
  let data = {
    text:localStorage.getItem('textReview'),
    rating:localStorage.getItem('rating')
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} style={{"margin-bottom":"0px"}}>
        Submit a Review
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style = {{"text-align":"center"}}>Submit a Review</DialogTitle>
        <DialogContent>
          <DialogContentText style = {{"margin-bottom":"10px"}}>
          Please be respectful when submitting reviews 
          </DialogContentText>
          <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
        marginLeft: '70px',
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={1}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
          <TextField
            autoFocus
            margin="dense"
            id="outlined-basic"
            label="Write your Review"
            type="review"
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            value={textReview}
            onChange={e => setTextReview(e.target.value)}
            
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={postReview}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}