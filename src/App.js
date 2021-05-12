import React, { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ItemListPage from "./pages/ItemListPage";
import AdminPage from "./pages/AdminPage";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import authStorage from "./auth/authStorage";
import { loginAction } from "./actions/userActions";
import ItemDetailPage from "./pages/ItemDetailPage";
import useLink from "./hooks/useLink";
import NotFound from "./components/page/NotFoundPage/NotFound";
import NotFoundPage from "./pages/NotFoundPage";
import TestPage from "./components/page/TestPage/TestPage";
import PurchaseHistoryPage from "./pages/PurchaseHistoryPage";

function App() {
  const dispatch = useDispatch();
  const [ready, setReady] = useState(false);

  useLink(
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  );

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (!user) return setReady(true);
    dispatch(loginAction(user));
    setReady(true);
  };

  useEffect(() => {
    restoreUser();
  }, []);

  return (
    <>
      {!ready && <></>}
      {ready && (
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/admin" component={AdminPage}></Route>
            <Route
              exact
              path="/items/:category"
              component={ItemListPage}
            ></Route>
            <Route
              exact
              path="/item_detail/:id"
              component={ItemDetailPage}
            ></Route>
            <Route exact path="/cart/:id?" component={CartPage}></Route>
            <Route exact path="/admin" component={AdminPage}></Route>
            <Route exact path="/test" component={TestPage}></Route>
            <Route
              exact
              path="/history"
              component={PurchaseHistoryPage}
            ></Route>
            <Route component={NotFoundPage}></Route>
          </Switch>
        </Router>
      )}
    </>
  );
}

export default App;
