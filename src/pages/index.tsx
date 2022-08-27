import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../components/Layout";
import { Button } from "../utils/styles";
import { NextPageWithLayout } from "../utils/types";

const Home: NextPageWithLayout = () => {
  const router = useRouter();
  useEffect(() => {
    // TODO: middleware with session
    router.push("/auth/sign-in");
  }, [router]);

  return (
    <div>
      Hello from chat app!
      <Button>Hello</Button>
    </div>
  );
};

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Home;
