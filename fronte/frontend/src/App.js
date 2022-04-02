import logo from "./logo.svg";
import "./App.css";

import Fetchh from "./components/Fetchh";
import ItemComponent from "./components/ItemComponent";
import AppBar from "./components/AppBar";
import { Routes, Route } from "react-router-dom";
import MyAccounts from "./pages/MyAccount";
import DrawerComponent from "./components/Drawer";
import AppBarWithoutSearch from "./components/AppBarWithoutSearch";
import { useState, useRef, useEffect } from "react";
import { Card, Footer, Header } from "./components/FooterStyles";

function App() {
  const [expanded, setExpanded] = useState(false);
  const [accodionHeight, setAccodionHeight] = useState(0);
  const ref = useRef(null);

  const open = () => setExpanded(!expanded);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Fetchh />} />
        <Route path="/items" element={<Fetchh />} />
        <Route
          path="myAccount"
          element={
            <>
              <AppBarWithoutSearch /> <MyAccounts />
            </>
          }
        />
        <Route
          path="profile"
          element={
            <>
              <AppBarWithoutSearch /> <MyAccounts />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
