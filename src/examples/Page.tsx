import Layout from "../components/Layout";
import { NextPageWithLayout } from "../utils/types";

const Page: NextPageWithLayout = () => {
  return <div></div>;
};

Page.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Page;
