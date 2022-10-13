import Layout from "@/compositions/Layout";
import LoginForm from "@/compositions/LoginForm/LoginForm";

import type { NextPage } from "next";

const Login: NextPage = () => {
  return (
    <Layout title="login">
      <LoginForm />
    </Layout>
  );
};

export default Login;
