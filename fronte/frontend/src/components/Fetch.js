import * as React from "react";
import { useEffect, useState, useContext } from "react";
import ItemComponent from "./ItemComponent";
import Item from "./Item";
import AppBar from "./AppBar";
import AppBarWithoutSearch from "./AppBarWithoutSearch";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import BrandComponent from './BrandComponent'
import TypesComponent from './TypesComponent'

function Fetch(props) {
  const [items, setItems] = useState([]);
  const [DataisLoaded, setDataisLoaded] = useState(false);
  const [brands,setBrands] = useState([]);
  const [ filter, setFilter] =  useState([]);
  const [types,setTypes] = useState([]);
 

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

          setFilter(json)
          let arrayBrands = json.map(item=>item.brand)
          let removedDuplicateBrands = [...new Set(arrayBrands)];
          setBrands(removedDuplicateBrands)

  
          let arrayTypes = json.map(item=>item.type)
          let removedDuplicateTypes = [...new Set(arrayTypes)];
          setTypes(removedDuplicateTypes)


        }
      });
  }, []);

  if (!DataisLoaded)
    return (
      <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
    );
if(props.path == "/" || props.path == "/items"){
  return (
    <div>
      <AppBar items={items} DataisLoaded={DataisLoaded} />

      
    </div>
  );
} else if(props.path == "/items/brands"){

  return (
    <div>
    <BrandComponent items={items} DataisLoaded={DataisLoaded} brands = {brands} filter = {filter} />

    
  </div>
  );

} else if(props.path == "/items/types"){
  return (

    <div>
    <TypesComponent items={items} DataisLoaded={DataisLoaded} types = {types} filter = {filter} />

    
  </div>

  );
}
}
export default Fetch;
