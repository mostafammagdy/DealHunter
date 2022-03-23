import logo from "./logo.svg";
import "./App.css";
import ItemComponent from "./components/ItemComponent";
import AppBar from "./components/AppBar";
import Items from "./components/Items";
import {
  Routes,
  Route,
} from "react-router-dom";
import MyAccounts from "./components/MyAccount"




function App() {
  return (
    <div className="App">
      <AppBar/>
<Routes>
  <Route path = "/" element = {<ItemComponent/>}/>
  <Route path = "myAccount" element = {<MyAccounts/>}/>
  <Route path = "profile" element = {<MyAccounts/>}/>
</Routes>
   
    </div>
  );
}

export default App;
