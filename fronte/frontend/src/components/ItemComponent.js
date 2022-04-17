import React, { useReducer, useState } from "react";
import Item from "./Item";

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
            <div style={{ backgroundColor: "#6f7db0" }} className="card">
              <Item key={item.key} item={item} onAdd={onAdd}></Item>
            </div>
          ))}
      </div>
      );
    </div>
  );
}

export default ItemComponent;
