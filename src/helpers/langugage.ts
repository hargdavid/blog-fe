import { useState } from "react";
import { useTranslation } from "react-i18next";

export const useLanguage = (): [(lang: string) => void, string | undefined] => {
  const { i18n } = useTranslation();
  const [currentLanguge, setCurrentLanguge] = useState<string>();

  const changeLanguage = (lang: string) => {
    setCurrentLanguge(lang);
    i18n.changeLanguage(lang);
  };

  return [changeLanguage, currentLanguge];
};
