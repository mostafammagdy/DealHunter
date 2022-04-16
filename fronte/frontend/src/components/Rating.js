import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { useState,useEffect,useContext } from 'react';
import { ColorLens } from '@mui/icons-material';
import { RatingContext } from '../contexts/rating';

const labels  = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function RatingView({id}) {
  const [value, setValue] = useState(1);
  const {ratings,setRatings} = useContext(RatingContext)

  let ratingsVar = []
let x = 0;

useEffect(()=>{
fetch(`/reviews/item/${id}`)
.then(res=>res.json())
.then(json=>{
setRatings(json)
 console.log("bro")

})


},[id])


useEffect(()=>{
  let sum = 0;
for(let i = 0;i<ratings.length;i++){

  sum = sum + ratings[i].rating;
console.log(sum)
}
setValue(Math.round(sum/ratings.length));

},[ratings])
console.log(ratings)
  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
        marginLeft: '70px',
        marginBottom:'20px'
      }}
    >
      <Rating
        name="read-only"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        readOnly
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />

    </Box>
  );
}