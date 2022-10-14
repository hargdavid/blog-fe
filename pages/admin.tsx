import Layout from "@/compositions/Layout";
import { getTokenFromLocalStorage } from "@/helpers/localStorage";
import type { NextPage } from "next";

const Login: NextPage = () => {
  const jwt = getTokenFromLocalStorage();

  return (
    <Layout title="admin">
      <h1>{jwt ? jwt.jwt : "EMPTY"}</h1>
    </Layout>
  );
};

export default Login;
