import React, { useReducer, useState } from "react";
import Appbar from "./AppBar";

class ItemComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      searchedItems: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    console.log("component did mount");
    fetch("/items", {
      crossDomain: true,
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        const info = this.state.items;
        if (info !== undefined) {
          this.setState({ items: json, DataisLoaded: true });
        }
      });
  }

  render(props) {
    const { DataisLoaded, items } = this.state;

    if (!DataisLoaded)
      return (
        <div>
          <h1>Please ewait...</h1>
        </div>
      );

    return (
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
            if (this.props.inputText == "") {
              return val;
            } else if (
              val.name
                .toLowerCase()
                .includes(this.props.inputText)
            ) {
              return val;
            }
          })
          .map((item) => (
            <div className="card">
              <img
                src={item.image}
                alt=""
              />
              <h3>{item.brand}</h3>
              <p>{item.description}</p>
              <h3>{item.name}</h3>$$:{item.price}, Item_Quantity:{" "}
              {item.quantity}
              <h3>{item.type}</h3>
            </div>
          ))}
      </div>
    );
  }
}

export default ItemComponent;
