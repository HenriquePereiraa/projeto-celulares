import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { IoPhonePortrait } from "react-icons/io5";

const Navbar = () => {

  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>M</h1>
          <IoPhonePortrait className={styles.icon__logo} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
