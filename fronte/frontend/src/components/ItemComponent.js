import React, { useReducer, useState } from "react";

class ItemComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
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

  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1>Please ewait...</h1>
        </div>
      );
    return (
      <div className="ItemComponent">
        <h1> here are all the items</h1>
        {items.map((item) => (
          <ol key={item.id}>
            Item_Bvrand: {item.brand}, Item_desc: {item.description}, Item_Name:{" "}
            {item.name},f Item_Price: {item.price}, Item_Quantity:{" "}
            {item.quantity}, Item_Type: {item.type}
          </ol>
        ))}
      </div>
    );
  }
}

export default ItemComponent;
