import Link from "next/link";
import Layout from "../../components/Layout";
import { NextPageWithLayout } from "../../utils/types";

const Me: NextPageWithLayout = () => {
  return (
    <div>
      <Link href="/servers/1">Server 1</Link>
      <div style={{ height: 1200 }}>user page</div>
    </div>
  );
};

Me.getLayout = (page) => {
  return <Layout shouldUserSeeServerChannelsSidebar={false}>{page}</Layout>;
};

export default Me;
