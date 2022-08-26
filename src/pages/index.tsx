import Layout from "../components/Layout";
import { Button } from "../utils/styles";
import { NextPageWithLayout } from "../utils/types";

const Home: NextPageWithLayout = () => {
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
