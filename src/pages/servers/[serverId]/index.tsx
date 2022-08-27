import Layout from "../../../components/Layout";
import { NextPageWithLayout } from "../../../utils/types";

const Server: NextPageWithLayout = () => {
  return (
    <div>
      <div style={{ height: 1200 }}>Huge content</div>
    </div>
  );
};

Server.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Server;
