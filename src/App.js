import logo from "./logo.svg";
import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screen/HomeScreen";
import CartScreen from "./screen/CartScreen";
import ItemListScreen from "./screen/ItemListScreen";
import ItemDetailScreen from "./screen/ItemDetailScreen";
import PurchaseHistoryScreen from "./screen/PurchaseHistoryScreen";
import SignScreen from "./screen/SignScreen";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AdminScreen from "./screen/AdminScreen";
import { useDispatch } from "react-redux";
import authStorage from "./auth/authStorage";
import { loginAction } from "./actions/userActions";

function App() {
  const dispatch = useDispatch();

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (!user) return;
    dispatch(loginAction(user));
  };

  useEffect(() => {
    restoreUser();
  }, []);

  return (
    <Router>
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
}

export default App;
