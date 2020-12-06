import logo from "./logo.svg";
import "./App.css";
import HomeScreen from "./screen/HomeScreen";
import CartScreen from "./screen/CartScreen";
import ItemListScreen from "./screen/ItemListScreen";
import ItemDetailScreen from "./screen/ItemDetailScreen";
import PurchaseHistoryScreen from "./screen/PurchaseHistoryScreen";
import LoginScreen from "./screen/SignScreen";
import SignScreen from "./screen/SignScreen";

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  // return <HomeScreen></HomeScreen>;
  // return <ItemListScreen></ItemListScreen>;
  // return <PurchaseHistoryScreen></PurchaseHica
  // return <CartScreen></CartScreen>;
  return <SignScreen></SignScreen>;
}

export default App;
