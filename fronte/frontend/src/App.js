import logo from "./logo.svg";
import './App.css'

import ItemComponent from "./components/ItemComponent";
import AppBar from "./components/AppBar";
import {Routes,Route} from "react-router-dom";
import MyAccounts from "./pages/MyAccount"
import AppBarWithoutSearch from "./components/AppBarWithoutSearch";
import CheckoutFunction from "./pages/CheckoutFunction";
import BrandComponent from "./components/BrandComponent";
import TypeComponent from "./components/TypeComponent";
function App() {
  return (
    <div className="App">

      
<Routes>
<Route path = "checkout" element = {<><AppBarWithoutSearch/> <CheckoutFunction/></>}/>
  <Route path = "/" element = {<AppBar/>}/>
  <Route path = "/items" element = {<AppBar/>}/>
  <Route path = "myAccount" element = {<><AppBarWithoutSearch/> <MyAccounts/></>}/>
  <Route path = "profile" element = {<><AppBarWithoutSearch/> <MyAccounts/></>}/>
  <Route path = "/items/brands" element = {<><AppBarWithoutSearch/> <BrandComponent/></>}/>
  <Route path = "/items/types" element = {<><AppBarWithoutSearch/> <TypeComponent/></>}/>
  
</Routes>
   
    </div>
  );
}

export default App;
