import IconButton from "@/components/IconButton";
import SweIcon from "@/components/Icons/SweIcon";
import UsIcon from "@/components/Icons/UsIcon";
import React from "react";
import { useTranslation } from "react-i18next";
interface Props {}

const Footer: React.FC<Props> = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <footer>
      <IconButton onClick={() => changeLanguage("sv")}>
        <SweIcon />
      </IconButton>
      <IconButton onClick={() => changeLanguage("en")}>
        <UsIcon />
      </IconButton>
    </footer>
  );
};

export default Footer;
