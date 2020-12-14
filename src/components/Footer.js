import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="page-footer py-4 bg-dark text-white footer-style">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-4">
            <h1 className="text-uppercase">Help</h1>

            <ul className="list-unstyled">
              <li>
                <a href="#!">Delivery Information</a>
              </li>
              <li>
                <a href="#!">Refunds & Returns</a>
              </li>
              <li>
                <a href="#!">Exchanges</a>
              </li>
              <li>
                <a href="#!">Discount</a>
              </li>
              <li>
                <a href="#!">Privacy Policy</a>
              </li>
              <li>
                <a href="#!">Terms Of Service</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <h1 className="text-uppercase">Business</h1>
            <li className="d-flex justify-content-between">
              <strong className="text-white">- Business Hour:</strong>
              <p>7:30 AM - 12:00 PM</p>
            </li>
            <li className="d-flex justify-content-between">
              <strong className="text-white">- Contact Number:</strong>
              <p>82-0779546</p>
            </li>
            <li className="d-flex justify-content-between">
              <strong className="text-white">- Shop Address: </strong>
              <p>702 Nguyễn Văn Linh, Tân Hưng, Quận 7, TP.HCM</p>
            </li>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
