import logo from "./logo.svg";
import React, { useEffect } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ItemListPage from "./pages/ItemListPage";
import PurchaseHistoryScreen from "./pages/PurchaseHistoryScreen";
import AdminPage from "./pages/AdminPage";
import SignScreen from "./pages/SignScreen";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import authStorage from "./auth/authStorage";
import { loginAction } from "./actions/userActions";
import ItemDetailPage from "./pages/ItemDetailPage";

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
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/admin" component={AdminPage}></Route>
        <Route exact path="/items/:category" component={ItemListPage}></Route>
        <Route exact path="/item_detail/:id" component={ItemDetailPage}></Route>
        <Route exact path="/cart/:id?" component={CartPage}></Route>
        <Route exact path="/history" component={PurchaseHistoryScreen}></Route>
        <Route exact path="/sign" component={SignScreen}></Route>
      </Switch>
    </Router>
  );
}

export default App;
