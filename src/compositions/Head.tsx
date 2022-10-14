import NextHead from "next/head";
import React from "react";
import { useTranslation } from "react-i18next";

interface Props {}

const Head: React.FC<Props> = () => {
  const { t } = useTranslation();

  return (
    <NextHead key="the-head">
      <meta lang={"sv"} />
      <title>{t("general.title")}</title>
      <meta name="description" content="Generated by create next app" />
    </NextHead>
  );
};

export default Head;
