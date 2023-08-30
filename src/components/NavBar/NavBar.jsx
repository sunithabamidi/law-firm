import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <div className={styles.navItems}>
        <a href="#">Home</a>
        <a href="#">Attorneys</a>
        <a href="#">Practice Areas</a>
        <a href="#">About Us</a>
      </div>

      <Button children="Contact Now" contact={true} />
    </nav>
  );
};

export default NavBar;
