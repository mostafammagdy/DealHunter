import logo from "./logo.svg";
import "./App.css";
import Fetch from "./components/Fetch";
import { Routes, Route } from "react-router-dom";
import MyAccounts from "./pages/MyAccount";
import DrawerComponent from "./components/Drawer";
import { useState, useRef, useEffect } from "react";
import AppBarWithoutSearch from "./components/AppBarWithoutSearch";
import CheckoutFunction from "./pages/CheckoutFunction";
import Admin from "./pages/Admin";


function App() {
  const [expanded, setExpanded] = useState(false);
  const [accodionHeight, setAccodionHeight] = useState(0);
  const ref = useRef(null);

  const open = () => setExpanded(!expanded);

  return (
    <div className="App">
  
<Routes>
  <Route path = "checkout" element = {<><AppBarWithoutSearch/> <CheckoutFunction/></>}/>
<Route path="/" element={<Fetch path = "/" />} />
    <Route path="/items" element={<Fetch path = "/items" />} />
  <Route path = "myAccount" element = {<><AppBarWithoutSearch/> <MyAccounts/></>}/>
  <Route path = "profile" element = {<><AppBarWithoutSearch/> <MyAccounts/></>}/>
  <Route path = "/items/brands" element = {<><Fetch path = "/items/brands"/></>}/>
  <Route path = "/items/types" element = {<><Fetch path = "/items/types"/></>}/>
  <Route path = "/administrator" element = {<Admin/>}/>
  
</Routes>
   
    </div>
  );
}

export default App;
