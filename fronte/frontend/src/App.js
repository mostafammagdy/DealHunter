import logo from "./logo.svg";
import "./App.css";
import ItemComponent from "./components/ItemComponent";
import AppBar from "./components/AppBar";
import Items from "./components/Items";

function App() {
  return (
    <div className="App">
      This is our app.
      <AppBar />
      <ItemComponent />
    </div>
  );
}

export default App;
