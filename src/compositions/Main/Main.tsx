import React from "react";
import styles from "./main.module.scss";

interface Props {
  children: React.ReactNode;
}

const Main: React.FC<Props> = ({ children }) => {
  return <main className={styles["root"]}>{children}</main>;
};

export default Main;
