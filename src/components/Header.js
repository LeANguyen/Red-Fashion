import React from "react";
import logo from "../assets/logo.png";
const Header = () => {
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
          <li className="nav-item mr-5 mt-1">
            <img src={logo} height="20" />
          </li>

          <li className="nav-item active">
            <a className="nav-link" href="home_page">
              <i className="fa fa-fw fa-home"></i>Home
              <span className="sr-only">(current)</span>
            </a>
          </li>

          <li className="nav-item dropdown active">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="shop_dropdown"
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
              <a className="dropdown-item" href="item_page?category=Shirt">
                Shirt
              </a>
              <a className="dropdown-item" href="item_page?category=Pant">
                Pant
              </a>
              <a className="dropdown-item" href="item_page?category=Shoe">
                Shoe
              </a>
            </div>
          </li>

          <li className="nav-item dropdown active">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="cart_dropdown"
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
              <a className="dropdown-item" href="cart_page">
                Current Cart
              </a>
              <a className="dropdown-item" href="cart_history_page">
                Purchase History
              </a>
            </div>
          </li>

          <li className="nav-item dropdown active">
            <a className="nav-link" href="sign_page" id="signin_head">
              <i className="fa fa-fw fa-user"></i>Signin
            </a>
          </li>

          <li className="nav-item dropdown active">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="user_dropdown"
              data-toggle="dropdown"
              aria-haspopup={true}
              aria-expanded={false}
              style={{ borderRadius: 5 }}
              hidden={true}
            >
              <i className="fa fa-fw fa-user"></i>
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a
                className="dropdown-item"
                href="#"
                onClick={() => console.log("signout()")}
              >
                Sign Out
              </a>
              <a className="dropdown-item" href="sign_page">
                Sign In With Another Account
              </a>
            </div>
          </li>

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

        <form className="form-inline my-2 my-lg-0">
          <input
            id="search_input"
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search Item's name"
            aria-label="Search"
          />
          <button
            className="btn btn-warning my-2 my-sm-0"
            type="button"
            onClick={console.log("search()")}
          >
            <i className="fa fa-fw fa-search"></i>Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
