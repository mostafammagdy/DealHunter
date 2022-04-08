import logo from "./logo.svg";
import "./App.css";

import Fetchh from "./components/Fetchh";
import ItemComponent from "./components/ItemComponent";
import AppBar from "./components/AppBar";
import { Routes, Route } from "react-router-dom";
import MyAccounts from "./pages/MyAccount";
import DrawerComponent from "./components/Drawer";
import { useState, useRef, useEffect } from "react";
import { Card, Footer, Header } from "./components/FooterStyles";
import AppBarWithoutSearch from "./components/AppBarWithoutSearch";
import CheckoutFunction from "./pages/CheckoutFunction";
import BrandComponent from "./components/BrandComponent";
import TypeComponent from "./components/TypeComponent";

import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
const queryClient = new QueryClient()

function App() {
  const [expanded, setExpanded] = useState(false);
  const [accodionHeight, setAccodionHeight] = useState(0);
  const ref = useRef(null);

  const open = () => setExpanded(!expanded);

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
<Routes>
  <Route path = "checkout" element = {<><AppBarWithoutSearch/> <CheckoutFunction/></>}/>
<Route path="/" element={<Fetchh />} />
    <Route path="/items" element={<Fetchh />} />
  <Route path = "myAccount" element = {<><AppBarWithoutSearch/> <MyAccounts/></>}/>
  <Route path = "profile" element = {<><AppBarWithoutSearch/> <MyAccounts/></>}/>
  <Route path = "/items/brands" element = {<><BrandComponent/></>}/>
  <Route path = "/items/types" element = {<><AppBarWithoutSearch/> <TypeComponent/></>}/>
  
</Routes>
</QueryClientProvider>
   
    </div>
  );
}

export default App;
