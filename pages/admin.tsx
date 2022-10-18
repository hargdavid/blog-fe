import Layout from "@/compositions/Layout";
import { getTokenFromLocalStorage } from "@/helpers/localStorage";
import IJwtResponse from "@/models/api/IJwtResponse";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

const Login: NextPage = () => {
  const [jwt, setJwt] = useState<IJwtResponse>();

  useEffect(() => {
    const jwt = getTokenFromLocalStorage();
    if (jwt) {
      setJwt(jwt);
    }
  }, []);

  return (
    <Layout title="admin">
      <h1>{jwt ? jwt.jwt : "EMPTY"}</h1>
    </Layout>
  );
};

export default Login;
