import React, { useEffect } from "react";
import Space from "./common/Space";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import ContainerCss from "./common/Container.module.scss";
const mediaList = [
  {
    type: "facebook",
    link: "https://www.facebook.com/profile.php?id=100013080886155"
  },
  {
    type: "twitter",
    link: "https://www.facebook.com/profile.php?id=100013080886155"
  },
  {
    type: "instagram",
    link: "https://www.facebook.com/profile.php?id=100013080886155"
  },
  {
    type: "pinterest",
    link: "https://www.facebook.com/profile.php?id=100013080886155"
  },
  {
    type: "youtube",
    link: "https://www.facebook.com/profile.php?id=100013080886155"
  }
];

const helpList = [
  { type: "Delivery Information", link: "/" },
  { type: "Privacy Policy", link: "/" },
  { type: "Terms of Service", link: "/" }
];

const businessList = [
  { type: "Contact Number", value: "267-269-8815", icon: "phone" },
  { type: "Contact Email", value: "Fashion@business.com", icon: "envelope" },
  { type: "Business Hour", value: "09:00 AM - 09:00 PM", icon: "clock-o" },
  {
    type: "Shop Address",
    value: "123 Trần Tuấn Khải, P5, Q5, TP.HCM",
    icon: "map-marker"
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
          <strong className="text-yellow-g text-xl">HELP</strong>
          <br></br>
          <br></br>
          {/* Delivery Information */}
          {helpList.map((help, i) => {
            return (
              <>
                <strong className="text-yellow-w">
                  <i className="fa fa-star"></i>
                  <Space></Space>
                  <Space></Space>
                  <Link
                    className={`text-yellow-w ${styles["link"]}`}
                    to={help["link"]}
                  >
                    {help["type"]}
                  </Link>
                </strong>
                <br></br>
                <br></br>
              </>
            );
          })}
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
          <strong className="text-yellow-g text-xl">BUSINESS</strong>
          <br></br>
          <br></br>
          {businessList.map((business, i) => {
            return (
              <>
                <li className={styles["media-container"]}>
                  <strong className="text-white">
                    <i className={"fa fa-" + business["icon"]}></i>
                    <Space></Space>
                    <Space></Space>
                    {business["type"]}
                  </strong>
                  <strong className="text-yellow">{business["value"]}</strong>
                </li>
                <br></br>
              </>
            );
          })}
          {/* Business section - end */}

          {/* social media buttons - bootstrap free - start */}
          <strong className="text-white">
            <i className="fa fa-thumbs-up"></i>
            <Space></Space>
            <Space></Space>
            Follow us on social media
          </strong>
          <br></br>
          <br></br>
          <div className={styles["media-container"]}>
            {mediaList.map((media, i) => {
              return (
                <a
                  target="_blank"
                  href={media["link"]}
                  className={styles[media["type"]]}
                >
                  <i className={"fa fa-2x fa-" + media["type"]}></i>
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
