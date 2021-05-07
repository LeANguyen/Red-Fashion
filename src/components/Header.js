import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../auth/useAuth";
import { useSelector } from "react-redux";
import LoginModal from "./modal/LoginModal";
import RegisterModal from "./modal/RegisterModal";
import $ from "jquery";
import Space from "./common/Space";
import Dropdown from "./common/Dropdown";
import DropdownItem from "./common/DropdownItem";
import styles from "./Header.module.scss";

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
      <nav className={`navbar navbar-expand-lg ${styles.body}`}>
        {/* collapse button */}
        <button
          className={`navbar-toggler ${styles["collapse-btn"]}`}
          data-toggle="collapse"
          data-target="#navbarToggler"
        >
          <span
            className={`navbar-toggler-icon ${styles["collapse-btn-icon"]}`}
          ></span>
        </button>

        {/* logo */}
        <div className="navbar-brand">
          <strong className="text-pink text-xl">
            <Link className={styles["logo"]} to="/">
              Fashion
            </Link>
          </strong>
        </div>

        {/* header body */}
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav mr-auto">
            {/* home */}
            <li className="nav-item mx-lg-2">
              {/* {`text-yellow-w ${FooterCss["link"]}`} */}
              <div className="nav-link">
                <strong className="text-yellow-w text-lg">
                  <i className="fa fa-home"></i>
                  <Space></Space>
                  <Space></Space>
                  <Link className={`text-yellow-w ${styles["link"]}`} to="/">
                    Home
                  </Link>
                </strong>
              </div>
            </li>

            {/* shop categories */}
            <li className="nav-item dropdown mx-lg-2">
              <Dropdown
                _iconName="black-tie"
                _text="Categories"
                _displayToggle
                _dropdownHover
                _className="btn-outline-pink d-block"
              >
                <DropdownItem>
                  <strong>
                    <i className="fa fa-star"></i>
                    <Space></Space>
                    <Space></Space>
                    <Link to="/items/Shirt">Shirt</Link>
                  </strong>
                </DropdownItem>

                <DropdownItem>
                  <strong>
                    <i className="fa fa-star"></i>
                    <Space></Space>
                    <Space></Space>
                    <Link to="/items/Pant">Pant</Link>
                  </strong>
                </DropdownItem>
                <DropdownItem>
                  <strong>
                    <i className="fa fa-star"></i>
                    <Space></Space>
                    <Space></Space>
                    <Link to="/items/Shoe">Shoe</Link>
                  </strong>
                </DropdownItem>
              </Dropdown>
            </li>

            {/* login - when user not logged in */}
            {user === null && (
              <li className="nav-item mx-lg-2">
                <a
                  className={`nav-link ${styles["link"]}`}
                  data-toggle="modal"
                  data-target="#loginModal"
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
                <Dropdown
                  _iconName="user"
                  _text={user.name}
                  _displayToggle
                  _dropdownHover
                  _className="btn-outline-yellow d-block"
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
                </Dropdown>
              </li>
            )}

            {/* admin */}
            <li className="nav-item mx-lg-2">
              <div className="nav-link">
                <h5 className="text-yellow-w">
                  <i className="fa fa-list"></i>
                  <Space></Space>
                  <Space></Space>
                  <Link
                    className={`text-yellow-w ${styles["link"]}`}
                    to="/admin"
                  >
                    Admin
                  </Link>
                </h5>
              </div>
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
