import React from "react";
import SocialMediaButton from "../SocialMediaButton";
import Space from "../common/Space";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark text-light">
      <div className="container-fluid row">
        {/* Spacing */}
        <div className="col-lg-1"></div>

        {/* Help section */}
        <div className="col-lg-4">
          <br></br>
          <h2 className="text-warning font-weight-bold">HELP</h2>
          <Link className="text-white font-weight-bold d-block" to="/">
            <i className="fa fa-star"></i>
            <Space></Space>
            <Space></Space>
            Delivery Information
          </Link>
          <br></br>
          <Link className="text-white font-weight-bold d-block" to="/">
            <i className="fa fa-star"></i>
            <Space></Space>
            <Space></Space>
            Privacy Policy
          </Link>
          <br></br>
          <Link className="text-white font-weight-bold d-block" to="/">
            <i className="fa fa-star"></i>
            <Space></Space>
            <Space></Space>
            Terms Of Service
          </Link>
        </div>

        {/* Spacing */}
        <div className="col-lg-1">
          <div className="d-lg-none d-block">
            <br></br>
            <li className="d-flex border-bottom border-secondary"></li>
          </div>
        </div>

        {/* Business section */}
        <div className="col-lg-5">
          <br></br>
          <h2 className="text-warning font-weight-bold">BUSINESS</h2>
          <li className="d-flex justify-content-between">
            <strong>
              <i className="fa fa-clock-o"></i>
              <Space></Space>
              <Space></Space>
              Business Hour:
            </strong>
            <span>09:00 AM - 09:00 PM</span>
          </li>
          <br></br>
          <li className="d-flex justify-content-between">
            <strong>
              <i className="fa fa-phone"></i>
              <Space></Space>
              <Space></Space>Contact Number:
            </strong>
            <span>{"(08)730898996"}</span>
          </li>
          <br></br>
          <li className="d-flex justify-content-between">
            <strong>
              <i className="fa fa-map-marker"></i>
              <Space></Space>
              <Space></Space>Shop Address:
            </strong>
            <span>702 Nguyễn Văn Linh, Tân Hưng, Quận 7, TP.HCM</span>
          </li>
          <br></br>
          <strong className="d-block">Follow us on social media:</strong>
          <br></br>
          <div className="d-flex justify-content-between">
            <SocialMediaButton
              _iconName={"facebook"}
              _href="https://www.facebook.com/profile.php?id=100013080886155"
            ></SocialMediaButton>
            <SocialMediaButton _iconName={"twitter"}></SocialMediaButton>
            <SocialMediaButton _iconName={"instagram"}></SocialMediaButton>
            <SocialMediaButton _iconName={"pinterest"}></SocialMediaButton>
            <SocialMediaButton _iconName={"youtube"}></SocialMediaButton>
          </div>
          <br></br>
        </div>

        {/* Spacing */}
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};

export default Footer;
