import Head from "@/compositions/Head";
import Main from "@/compositions/Main/Main";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ title, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>{title}</Head>
      <Main>{children}</Main>
    </ThemeProvider>
  );
};

export default Layout;
