import * as React from "react";
import { useEffect, useState, useContext } from "react";
import ItemComponent from "./ItemComponent";
import Item from "./Item";
import AppBar from "./AppBar";
import AppBarWithoutSearch from "./AppBarWithoutSearch";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Fetchh() {
  const [items, setItems] = useState([]);
  const [DataisLoaded, setDataisLoaded] = useState(false);
  const [brands,setBrands] = useState([]);
  const [ filter, setFilter] =  useState([]);
 

  useEffect(() => {
    console.log("component mounted eh");
    fetch("/items", {
      crossDomain: true,
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        const info = items;
        if (info !== undefined) {
          setItems(json);
          setDataisLoaded(true);
        }
      });
  }, []);

  if (!DataisLoaded)
    return (
      <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
    );

  return (
    <div>
      <AppBar items={items} DataisLoaded={DataisLoaded} />

      
    </div>
  );
}
export default Fetchh;
