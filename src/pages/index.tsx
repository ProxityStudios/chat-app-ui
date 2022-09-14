import { useRouter } from "next/router";
import { useEffect } from "react";
import { NextPageWithLayout } from "../utils/types";

const Home: NextPageWithLayout = () => {
  const router = useRouter();
  useEffect(() => {
    // TODO: middleware with session
    router.push("/auth/sign-in");
  }, [router]);

  return <>redirecting</>;
};

export default Home;
