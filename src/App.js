import logo from "./logo.svg";
import "./App.css";
import HomeScreen from "./screen/HomeScreen";
import CartScreen from "./screen/CartScreen";
import ItemListScreen from "./screen/ItemListScreen";
import ItemDetailScreen from "./screen/ItemDetailScreen";
import PurchaseHistoryScreen from "./screen/PurchaseHistoryScreen";
import SignScreen from "./screen/SignScreen";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AdminScreen from "./screen/AdminScreen";

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

  return (
    <Router>
      {/* <ul className="App-header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul> */}
      <Switch>
        <Route exact path="/" component={HomeScreen}></Route>
        <Route exact path="/admin" component={AdminScreen}></Route>
        <Route exact path="/items/:category" component={ItemListScreen}></Route>
        <Route
          exact
          path="/item_detail/:id"
          component={ItemDetailScreen}
        ></Route>
        <Route exact path="/cart/:id?" component={CartScreen}></Route>
        <Route exact path="/history" component={PurchaseHistoryScreen}></Route>
        <Route exact path="/sign" component={SignScreen}></Route>
      </Switch>
    </Router>
  );

  // return <HomeScreen></HomeScreen>;
  // return <ItemListScreen></ItemListScreen>;
  return <ItemDetailScreen></ItemDetailScreen>;
  // return <PurchaseHistoryScreen></PurchaseHica
  // return <CartScreen></CartScreen>;
  return <SignScreen></SignScreen>;
}

export default App;
