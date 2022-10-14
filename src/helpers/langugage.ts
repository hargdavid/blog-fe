import { useState } from "react";
import { useTranslation } from "react-i18next";

export const useLanguage = (): [(lang: string) => void, string | undefined] => {
  const { i18n } = useTranslation();
  //change to redux
  const [currentLanguage, setCurrentLanguage] = useState<string>();

  const changeLanguage = (lang: string) => {
    setCurrentLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return [changeLanguage, currentLanguage];
};
