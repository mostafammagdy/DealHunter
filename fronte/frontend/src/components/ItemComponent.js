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
      <div className="item-container">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <h1> featured items </h1>

          <br />
        </div>
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
