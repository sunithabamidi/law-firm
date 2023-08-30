import React from "react";
import styles from "./HeroSection.module.css";
import HeroImage from "../../assets/HeroImage.svg";
import EmailIcon from "@mui/icons-material/Email";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContentWrapper}>
        <div className={styles.heading}>
          <h1>You don’t have to</h1>
          <h1>Fight them Alone</h1>
        </div>
        <div className={styles.content}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            eget, hac massa gravida arcu interdum proin curae.
          </p>
        </div>
        <div className={styles.buttonWrapper}>
          <input
            type="text"
            className={styles.textField}
            placeholder="        ✉  Enter your email address"
          ></input>
          <button className={styles.button}>Let's Talk</button>
        </div>
      </div>

      <img src={HeroImage} alt="hero" width={470} />
    </div>
  );
};

export default HeroSection;
