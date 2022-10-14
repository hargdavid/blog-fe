import IconButton from "@/components/IconButton";
import SweIcon from "@/components/Icons/SweIcon";
import UsIcon from "@/components/Icons/UsIcon";
import { useLanguage } from "@/helpers/langugage";
import React from "react";
import styles from "./footer.module.scss";

const Footer: React.FC = () => {
  const [changeLanguage] = useLanguage();

  return (
    <footer className={styles["root"]}>
      <div className={styles["lang-section"]}>
        <IconButton onClick={() => changeLanguage("sv")}>
          <SweIcon />
        </IconButton>
        <IconButton onClick={() => changeLanguage("en")}>
          <UsIcon />
        </IconButton>
      </div>
    </footer>
  );
};

export default Footer;
