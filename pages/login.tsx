import Layout from "@/compositions/Layout";
import LoginForm from "@/compositions/LoginForm/LoginForm";
import type { NextPage } from "next";
import { useTranslation } from "react-i18next";

const Login: NextPage = () => {
  const { t } = useTranslation();

  return (
    <Layout title="login">
      <LoginForm />
    </Layout>
  );
};

export default Login;
