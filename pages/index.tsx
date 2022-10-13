import Button from "@/components/Button";
import Layout from "@/compositions/Layout";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Layout title="StartPage">
        <Button
          title="test knapp"
          onClick={() => console.log("click")}
          variant="contained"
        />
      </Layout>
    </>
  );
};

export default Home;
