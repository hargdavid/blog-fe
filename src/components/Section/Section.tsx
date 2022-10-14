import React from "react";
import styles from "./section.module.scss";

interface Props {
  children: React.ReactNode;
}

const Section: React.FC<Props> = ({ children }) => {
  return <section className={styles["root"]}>{children}</section>;
};

export default Section;
