import { Button } from "@material-ui/core";
import { CartItemType } from "../App";
import { Link } from "react-router-dom";
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
    border-bottom: 3px solid black;
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
      margin-left: 30px;
    }
  `;
  return (
    <Wrapper>
      <h2 style={{ fontWeight: "bold", textDecorationLine: "underline" }}>
        Your Cart
      </h2>
      <div>{cartItems.length === 0 ? <p>No items in cart.</p> : null}</div>
      {cartItems.map((item) => (
        <Wrapper2>
          <div key={item.id}>
            <h3>{item.name}</h3>
            <div className="information">
              <p>
                <text style={{ fontWeight: "bold" }}>Price:</text> ${item.price}
              </p>
              <p>
                <text style={{ fontWeight: "bold" }}>Total:</text> $
                {(item.quantity * item.price).toFixed(2)}
              </p>
            </div>
            <div className="buttons">
              <Button
                style={{ backgroundColor: "red", fontSize: 18 }}
                size="small"
                disableElevation
                variant="contained"
                onClick={() => onRemove(item)}
              >
                -
              </Button>
              <p>{}</p>
              <p style={{ "margin-left": "20px", "margin-right": "20px" }}>
                {item.quantity}
              </p>
              <Button
                style={{ backgroundColor: "green", fontSize: 18 }}
                size="small"
                disableElevation
                variant="contained"
                onClick={() => onAdd(item)}
              >
                +
              </Button>
            </div>
          </div>
          <img
            resizeMode={"cover"}
            src={"https://m.media-amazon.com/images/I/21DejQuoT2L.jpg"}
            alt={item.name}
          />
        </Wrapper2>
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
      <Link style={{ textDecoration: "none" }} to="/checkout">
        <Button style={{ backgroundColor: "lightgrey" }} size="big">
          {" "}
          Checkout
        </Button>
      </Link>
    </Wrapper>
  );
}
