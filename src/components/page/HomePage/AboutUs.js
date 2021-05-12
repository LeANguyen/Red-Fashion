import React from "react";
import styles from "./AboutUs.module.scss";
import ad from "../../../assets/ad.mp4";

const AboutUs = () => {
  return (
    <div>
      <div className={styles["container"]}>
        <div className="row">
          <div className="col-lg-8">
            <video
              width="100%"
              height="100%"
              controls
              className={styles["video"]}
            >
              <source src={ad} type="video/mp4"></source>
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col-lg-4">
            <div className={styles["about"]}>
              <div className={styles["about-title"]}>
                <strong className={styles["title"]}>About Us</strong>
              </div>
              <br></br>
              <p className="text-light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
