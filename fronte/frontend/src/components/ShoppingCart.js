import { Button } from "@material-ui/core";
import { CartItemType } from "../App";

import styled from "styled-components";

export default function ShoppingCart(props) {
  const calculateTotal = (items: []) =>
    items.reduce((acc, item) => acc + item.quantity * item.price, 0);
  const { cartItems, onAdd, onRemove } = props;

  const Wrapper = styled.aside`
    font-family: Arial, Helvetica, sans-serif;
    width: 500px;
    padding: 20px;
  `;
  const Wrapper2 = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;
    border-bottom: 1px solid lightblue;
    padding-bottom: 20px;

    div {
      flex: 1;
    }

    .information,
    .buttons {
      display: flex;
      justify-content: space-between;
    }

    img {
      width: 50,
      height: 50,
      borderRadius: 150 / 2,
      overflow: "hidden",
      borderWidth: 3,
      borderColor: "red"
      max-width: 80px;
      object-fit: cover;
      margin-left: 40px;
    }
  `;
  return (
    <Wrapper>
      <h2>Your Cart</h2>
      <div>{cartItems.length === 0 ? <p>No items in cart.</p> : null}</div>
      {cartItems.map((item) => (
        <Wrapper2>
          <div key={item.id}>
            <h3>{item.name}</h3>
            <div className="information">
              <p>Price: ${item.price}</p>
              <p>Total: ${(item.quantity * item.price).toFixed(2)}</p>
            </div>
            <div className="buttons">
              <button
                size="small"
                disableElevation
                variant="contained"
                onClick={() => onRemove(item)}
              >
                -
              </button>
              <p>{item.quantity}</p>
              <button
                size="small"
                disableElevation
                variant="contained"
                onClick={() => onAdd(item)}
              >
                +
              </button>
            </div>
          </div>
          <img
            src={"https://m.media-amazon.com/images/I/21DejQuoT2L.jpg"}
            alt={item.name}
          />
        </Wrapper2>
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
}
