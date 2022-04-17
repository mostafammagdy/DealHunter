import * as React from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import HoverRating from "./Rating";
import Review from "./Review";
import RatingView from "./Rating.js"
import { RatingContext } from "../contexts/rating";
import { useState } from "react";

import Rate from './Rate.js'
import { border } from "@mui/system";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Item(props) {
  const [expanded, setExpanded] = React.useState(false);
  const { item, onAdd } = props;

  const [ratings,setRatings] = useState([])

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={item.type} subheader={item.brand} />
      <CardMedia
        component="img"
        height="345"
        image={item.image}
        alt={item.name}
      />
      <CardContent>
        <Typography key={item.key} variant="body2" color="text.secondary">
          <h2>{item.name}</h2>
          <h3>${item.price}</h3>
          <h4>Quantity:{item.quantity}</h4>
        </Typography>
      </CardContent>
      <IconButton size="large" onClick={() => onAdd(item)} style={{
        color: "rgba(10, 0, 0, .85)",
        backgroundColor: "gold",
        borderRadius :"15px",
        marginBottom :"10px"}}>
        Add to Cart
      </IconButton>
      <RatingContext.Provider value = {{ratings,setRatings}}>
      <RatingView id = {item.id}/>
      <Review id = {item.id}/>
      <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </RatingContext.Provider>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>{item.description}</Typography>
          <Typography paragraph>Reviews:</Typography>
         {ratings.map(rating=>(
           <>
        <Rate value = {rating.rating}/>
          <Typography paragraph>{rating.text}</Typography>
          </>
         ))}
        </CardContent>
      </Collapse>
    </Card>
  );
}
