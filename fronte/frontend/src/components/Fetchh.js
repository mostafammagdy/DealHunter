import * as React from "react";
import { useEffect, useState, useContext } from "react";
import ItemComponent from "./ItemComponent";
import Item from "./Item";
import AppBar from "./AppBar";
import AppBarWithoutSearch from "./AppBarWithoutSearch";

function Fetchh() {
  const [items, setItems] = useState([]);
  const [DataisLoaded, setDataisLoaded] = useState(false);

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
      <div>
        <h1>got milk1</h1>
        <h1>Please ewait...</h1>
      </div>
    );

  return (
    <div>
      <AppBar items={items} DataisLoaded={DataisLoaded} />

      <h1>got milk2</h1>
    </div>
  );
}
export default Fetchh;
