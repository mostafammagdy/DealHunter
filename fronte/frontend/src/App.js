import logo from "./logo.svg";
import './App.css'

import ItemComponent from "./components/ItemComponent";
import AppBar from "./components/AppBar";
import {Routes,Route} from "react-router-dom";
import MyAccounts from "./pages/MyAccount"
import DrawerComponent from "./components/Drawer";
import AppBarWithoutSearch from "./components/AppBarWithoutSearch";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div className="App">

      
<Routes>
<Route path = "checkout" element = {<><AppBarWithoutSearch/> <Checkout/></>}/>
  <Route path = "/" element = {<AppBar/>}/>
  <Route path = "/items" element = {<AppBar/>}/>
  <Route path = "myAccount" element = {<><AppBarWithoutSearch/> <MyAccounts/></>}/>
  <Route path = "profile" element = {<><AppBarWithoutSearch/> <MyAccounts/></>}/>
  
</Routes>
   
    </div>
  );
}

export default App;
