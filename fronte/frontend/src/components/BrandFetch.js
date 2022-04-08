import { SettingsApplicationsRounded } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import Appbar from "./AppBar";
import { LoadingButton } from '@mui/lab';

import SendIcon from '@mui/icons-material/Send';

function BrandFetch(props) {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = React.useState(false);

  
   

  useEffect(() => {
    fetch(`/items/?brand=${props.item}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(result)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (

<div>
    <h1>we have returned</h1>
  </div>
    )}
}





export default BrandFetch;





/*
class BrandComponent extends React.Component {
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
    fetch("/items/brands", {
      crossDomain: true,
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        console.log(json[1])
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
          <h1>Please wait...</h1>
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
            }  {
              return val;
            }
          })
          .map((item) => (
            <div className="card">
              <img
                src="https://m.media-amazon.com/images/I/21DejQuoT2L.jpg"
                alt=""
              />
              <h3>{item}</h3>
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
*/

