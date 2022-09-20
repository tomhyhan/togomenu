import React from "react";
import { Outlet, Link } from "react-router-dom";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <img
        className={styles.icon}
        src="images/togo_AppIcon2.png"
        alt="togo icon"
      />
      <div className={styles.logoGrp}>
        <img
          className={styles.logo}
          src="images/logoTitle.png"
          alt="togo title"
        />
        <div className={styles.locationGrp}>
          <div className={styles.location}>
            <strong>SFU Burnaby</strong>
          </div>
        </div>
      </div>
      <div className={styles.menuGrp}>
        <Link to="/menu">
          <img
            className={styles.menu}
            src="images/viewMenu.png"
            alt="togo menu"
          />
        </Link>
      </div>
    </div>
  );
}

export default Home;
