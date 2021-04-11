import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { Link, useHistory } from "react-router-dom";
import authStorage from "../../auth/authStorage";
import useAuth from "../../auth/useAuth";
import { useSelector } from "react-redux";
import LoginModal from "../modal/LoginModal";
import RegisterModal from "../modal/RegisterModal";
import $ from "jquery";
import Space from "../common/Space";
import AppDropdown from "../common/AppDropdown";
import HeaderCss from "./Header.module.scss";

const Header = () => {
  const history = useHistory();
  const auth = useAuth();

  // redux in experiment (storage) - please do not delete
  const user = useSelector(state => state.user.data);

  const logout = () => {
    auth.logout();
    history.push("/");
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg ${HeaderCss.body}`}>
        {/* collapse button */}
        <button
          className={`navbar-toggler ${HeaderCss["collapse-btn"]}`}
          data-toggle="collapse"
          data-target="#navbarToggler"
        >
          <span
            className={`navbar-toggler-icon ${HeaderCss["collapse-btn-icon"]}`}
          ></span>
        </button>

        {/* logo */}
        <div className="navbar-brand">
          <h2 style={{ margin: 0 }}>
            <Link className={`${HeaderCss["logo"]}`} to="/">
              Fashion
            </Link>
          </h2>
        </div>

        {/* header body */}
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav mr-auto">
            {/* home */}
            <li className="nav-item mx-lg-2">
              <Link className={`nav-link ${HeaderCss["link"]}`} to="/">
                <i className="fa fa-home"></i>
                <Space></Space>
                <Space></Space>
                Home
              </Link>
            </li>

            {/* shop categories */}
            <li className="nav-item dropdown mx-lg-2">
              <AppDropdown
                _iconName="black-tie"
                _text="Categories"
                _displayToggle
                _textBold
                _className={`nav-link ${HeaderCss["link"]}`}
              >
                <Link className="dropdown-item" to="/items/Shirt">
                  <i className="fa fa-star"></i>
                  <Space></Space>
                  <Space></Space>
                  Shirt
                </Link>
                <Link className="dropdown-item" to="/items/Pant">
                  <i className="fa fa-star"></i>
                  <Space></Space>
                  <Space></Space>
                  Pant
                </Link>
                <Link className="dropdown-item" to="/items/Shoe">
                  <i className="fa fa-star"></i>
                  <Space></Space>
                  <Space></Space>
                  Shoe
                </Link>
              </AppDropdown>
            </li>

            {/* login - when user not logged in */}
            {user === null && (
              <li className="nav-item mx-lg-2">
                <a
                  className={`nav-link ${HeaderCss["link"]}`}
                  data-toggle="modal"
                  data-target="#loginModal"
                  data-backdrop="static"
                  data-keyboard="false"
                >
                  <i className="fa fa-user"></i>
                  <Space></Space>
                  <Space></Space>Login
                </a>
              </li>
            )}

            {/* user - when user logged in */}
            {user !== null && (
              <li className="nav-item dropdown mx-lg-2">
                <AppDropdown
                  _iconName="user"
                  _text={user.name}
                  _variant="outline-dark"
                  _displayToggle
                  _textBold
                  _className={`nav-link ${HeaderCss["link"]}`}
                >
                  <Link className="dropdown-item" to="/cart?">
                    <i className="fa fa-shopping-cart"></i>
                    <Space></Space>
                    <Space></Space>
                    Current Cart
                  </Link>
                  <Link className="dropdown-item" to="/history">
                    <i className="fa fa-list-alt"></i>
                    <Space></Space>
                    <Space></Space>
                    Purchase History
                  </Link>
                  <a className="dropdown-item" onClick={() => logout()}>
                    <i className="fa fa-arrow-circle-o-left"></i>
                    <Space></Space>
                    <Space></Space>
                    Logout
                  </a>
                  <a
                    className="dropdown-item"
                    onClick={() => $("#loginModal").modal("show")}
                  >
                    <i className="fa fa-sign-in"></i>
                    <Space></Space>
                    <Space></Space>
                    Login with another account
                  </a>
                </AppDropdown>
              </li>
            )}

            {/* admin */}
            <li className="nav-item mx-lg-2">
              <Link className={`nav-link ${HeaderCss["link"]}`} to="/">
                <i className="fa fa-list"></i>
                <Space></Space>
                <Space></Space>Admin
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <LoginModal _id="loginModal"></LoginModal>
      <RegisterModal _id="registerModal"></RegisterModal>
    </>
  );
};

export default Header;
