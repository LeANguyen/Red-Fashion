import React, { useEffect } from "react";
import Space from "./common/Space";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import ContainerCss from "./common/Container.module.scss";
const mediaList = [
  {
    media: "facebook",
    url: "https://www.facebook.com/profile.php?id=100013080886155"
  },
  {
    media: "twitter",
    url: "https://www.facebook.com/profile.php?id=100013080886155"
  },
  {
    media: "instagram",
    url: "https://www.facebook.com/profile.php?id=100013080886155"
  },
  {
    media: "pinterest",
    url: "https://www.facebook.com/profile.php?id=100013080886155"
  },
  {
    media: "youtube",
    url: "https://www.facebook.com/profile.php?id=100013080886155"
  }
];

const Footer = () => {
  return (
    <div className={styles["body"]}>
      <div className="row container-fluid">
        {/* Spacing */}
        <div className="col-lg-1"></div>

        {/* Help links - start */}
        <div className="col-lg-4">
          <br></br>
          <h2 className="text-yellow-g">HELP</h2>

          {/* Delivery Information */}
          <strong className="text-yellow-w">
            <i className="fa fa-star"></i>
            <Space></Space>
            <Space></Space>
            <Link className={`text-yellow-w ${styles["link"]}`} to="/">
              Delivery Information
            </Link>
          </strong>
          <br></br>
          <br></br>

          {/* Privacy Policy */}
          <strong className="text-yellow-w">
            <i className="fa fa-star"></i>
            <Space></Space>
            <Space></Space>
            <Link className={`text-yellow-w ${styles["link"]}`} to="/">
              Privacy Policy
            </Link>
          </strong>
          <br></br>
          <br></br>

          {/* Terms of Service */}
          <strong className="text-yellow-w">
            <i className="fa fa-star"></i>
            <Space></Space>
            <Space></Space>
            <Link className={`text-yellow-w ${styles["link"]}`} to="/">
              Terms of Service
            </Link>
          </strong>
          <br></br>
          <br></br>
        </div>
        {/* Help links - end */}

        {/* Spacing */}
        <div className="col-lg-1">
          <div className="d-lg-none d-block">
            <br></br>
            <li className={ContainerCss["divider"]}></li>
            <br></br>
          </div>
        </div>

        <div className="col-lg-5">
          {/* Business section - start */}
          <br></br>
          <h2 className="text-yellow-g">BUSINESS</h2>
          <li className={styles["media-container"]}>
            <strong className="text-yellow-w">
              <i className="fa fa-phone"></i>
              <Space></Space>
              <Space></Space>Contact Number:
            </strong>
            <strong className={"text-yellow"}>{"267-269-8815"}</strong>
          </li>
          <br></br>
          <li className={styles["media-container"]}>
            <strong className="text-yellow-w">
              <i className="fa fa-envelope"></i>
              <Space></Space>
              <Space></Space>Contact Email:
            </strong>
            <strong className="text-yellow">Fashion@business.com</strong>
          </li>
          <br></br>
          <li className={styles["media-container"]}>
            <strong className="text-yellow-w">
              <i className="fa fa-clock-o"></i>
              <Space></Space>
              <Space></Space>
              Business Hour:
            </strong>
            <strong className="text-pink">09:00 AM - 09:00 PM</strong>
          </li>
          <br></br>
          <li className={styles["media-container"]}>
            <strong className="text-yellow-w">
              <i className="fa fa-map-marker"></i>
              <Space></Space>
              <Space></Space>Shop Address:
            </strong>
            <strong className="text-pink">
              4975 Valley Drive, Eagleville, PA, Pennsylvania
            </strong>
          </li>
          {/* Business section - end */}

          {/* social media buttons - bootstrap free - start */}
          <br></br>
          <strong className="text-pink-w">
            <i className="fa fa-thumbs-up"></i>
            <Space></Space>
            <Space></Space>
            Follow us on social media:
          </strong>
          <br></br>
          <br></br>
          <div className={styles["media-container"]}>
            {mediaList.map((media, i) => {
              return (
                <a
                  target="_blank"
                  href={media.url}
                  className={styles[media.media]}
                >
                  <i className={"fa fa-2x fa-" + media.media}></i>
                </a>
              );
            })}
          </div>
          {/* social media buttons - bootstrap free - end */}
        </div>

        {/* Spacing */}
        <div className="col-lg-1"></div>
      </div>
      <br></br>
      <br></br>
    </div>
  );
};

export default Footer;
