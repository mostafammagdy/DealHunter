import React, { useReducer, useState } from "react";
import Appbar from "./AppBar";
import { Card, Footer, Header } from "./FooterStyles";
import CartPreview from "./ShoppingCart";

import Item from "./Item";
import ShoppingCart from "./ShoppingCart";

function ItemComponent(props) {
  const { cartItems, onAdd, inputText, DataisLoaded, items } = props;

  const [searchedItems, setSearchedItems] = useState([]);

  return (
    <div>
      {/* <h1 style = {{"margin-top":"10px","margin-bottom":"20px"}}> Top Products{"\n"} </h1> */}
      <div className="item-container">
     
        {items
          .filter((val) => {
            if (inputText == "") {
              return val;
            } else if (val.name.toLowerCase().includes(inputText)) {
              return val;
            }
          })
          .map((item) => (
            <div className="card">
              <Item key={item.key} item={item} onAdd={onAdd}></Item>
            </div>
          ))}
      </div>
      );
    </div>
  );
}

export default ItemComponent;
