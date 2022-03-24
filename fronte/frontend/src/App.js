import logo from "./logo.svg";
import ItemComponent from "./components/ItemComponent";
import AppBar from "./components/AppBar";
import {Routes,Route} from "react-router-dom";
import MyAccounts from "./pages/MyAccount"




function App() {
  return (
    <div className="App">
      <AppBar/>
<Routes>
  <Route path = "/" element = {<ItemComponent/>}/>
  <Route path = "/items" element = {<ItemComponent/>}/>
  <Route path = "myAccount" element = {<MyAccounts/>}/>
  <Route path = "profile" element = {<MyAccounts/>}/>
</Routes>
   
    </div>
  );
}

export default App;
