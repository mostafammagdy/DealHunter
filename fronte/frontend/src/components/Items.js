import * as React from "react";
import { useEffect, useState } from "react";

export default function Item() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("/items")
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
      });
  }, []);

  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {this.state.movies.map((movie) => {
          return <li key={`movie-${movie.id}`}>{movie.name}</li>;
        })}
      </ul>
    </div>
  );
}
