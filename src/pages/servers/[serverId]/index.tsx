import { useRouter } from "next/router";
import ServerLayout from "../../../components/server/ServerLayout";
import { NextPageWithLayout } from "../../../utils/types";

const Server: NextPageWithLayout = () => {
  const router = useRouter();
  return (
    <div>
      Server {router.query.serverId}
      <div style={{ height: 1200 }}>Huge content</div>
    </div>
  );
};

Server.getLayout = (page) => {
  return <ServerLayout>{page}</ServerLayout>;
};

export default Server;
