import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="page-footer pt-4 bg-dark text-white footer-style">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            {/* <i className="fa fa-fw fa-home">Home</i> */}
            {/* <span className="sr-only">(current)</span> */}
            <h1 className="text-uppercase">Business</h1>
            <p className="font-weight-bold">- Business Hour:</p>
            <p>7:30 AM - 12:00 PM</p>
            <p className="font-weight-bold">- Contact Number:</p>
            <p>82-0779546</p>
            <p className="font-weight-bold">- Shop Address:</p>
            <p>702 Nguyễn Văn Linh, Tân Hưng, Quận 7, TP.HCM</p>
          </div>
          <hr className="clearfix w-100 d-md-none pb-3"></hr>

          <div className="col-md-3 mb-md-0 mb-3">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
