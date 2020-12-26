import React from "react";
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const userName = useSelector(state => state.user.name);

  const currentId = localStorage.getItem("id");

  const logout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    history.push("/");
  };

  console.log(localStorage.getItem("userinfo"));
  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark header-style">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded={false}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item mx-lg-4 my-1">
            <img src={logo} height="20px" />
          </li>

          <li className="nav-item active mx-lg-2">
            <a className="nav-link">
              <Link className="text-white font-weight-bold" to="/">
                <i className="fa fa-fw fa-home"></i>Home
              </Link>
              <span class="sr-only">(current)</span>
            </a>
          </li>

          <li className="nav-item dropdown active mx-lg-2">
            <a
              className="nav-link dropdown-toggle text-white font-weight-bold"
              href="#"
              data-toggle="dropdown"
              aria-haspopup={true}
              aria-expanded={false}
            >
              <i className="fa fa-fw fa-black-tie"></i>Shop
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link className="dropdown-item" to="/items/Shirt">
                Shirt
              </Link>
              <Link className="dropdown-item" to="/items/Pant">
                Pant
              </Link>
              <Link className="dropdown-item" to="/items/Shoe">
                Shoe
              </Link>
            </div>
          </li>

          {currentId !== null && (
            <li className="nav-item dropdown active mx-lg-2">
              <a
                className="nav-link dropdown-toggle text-white font-weight-bold"
                href="#"
                data-toggle="dropdown"
                aria-haspopup={true}
                aria-expanded={false}
              >
                <i className="fa fa-fw fa-shopping-cart"></i>Cart
              </a>

              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link className="dropdown-item" to="/cart?">
                  Current Cart
                </Link>
                <Link className="dropdown-item" to="/history">
                  Purchase History
                </Link>
                {/* <a className="dropdown-item" href="cart">
                Current Cart
              </a>
              <a className="dropdown-item" href="history">
                Purchase History
              </a> */}
              </div>
            </li>
          )}

          {currentId === null && (
            <li className="nav-item dropdown active mx-lg-2">
              <a className="nav-link" href="sign" id="signin_head">
                <Link className="text-white font-weight-bold" to="/sign">
                  <i className="fa fa-fw fa-user"></i>Login
                </Link>
                {/* <i className="fa fa-fw fa-user"></i>Signin */}
              </a>
            </li>
          )}

          {currentId !== null && (
            <li className="nav-item dropdown active mx-lg-2 bg-danger rounded">
              <a
                className="nav-link dropdown-toggle font-weight-bold"
                href="#"
                id="user_dropdown"
                data-toggle="dropdown"
                aria-haspopup={true}
                aria-expanded={false}
                style={{ borderRadius: 5 }}
                hidden={false}
              >
                <i className="fa fa-fw fa-user"></i>
                {localStorage.getItem("name") + currentId}
              </a>
              <div
                className="dropdown-menu  "
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#" onClick={() => logout()}>
                  Sign Out
                </a>
                <Link className="dropdown-item" to="/sign">
                  Sign In With Another Account
                </Link>
              </div>
            </li>
          )}

          <li className="nav-item active">
            <a
              className="nav-link"
              href="admin_page"
              id="admin_head"
              hidden={true}
            >
              <i className="fa fa-fw fa-list"></i>Admin's Page
            </a>
          </li>
        </ul>

        <form className="form-inline">
          <input
            className="form-control mx-lg-1 my-1"
            type="search"
            placeholder="Search Item's name"
            aria-label="Search"
          />
          <button
            className="btn btn-warning mx-lg-1 my-1 font-weight-bold"
            type="button"
            onClick={() => console.log("search()")}
          >
            <i className="fa fa-fw fa-search"></i>Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
