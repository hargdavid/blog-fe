import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "sv",
  lng: "sv",
  resources: {
    sv: {
      translations: require("./locales/sv/translations.json"),
    },
    en: {
      translations: require("./locales/en/translations.json"),
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
});

i18n.languages = ["sv", "en"];

export default i18n;
