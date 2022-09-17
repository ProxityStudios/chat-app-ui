import UserLayout from "../../components/user/UserLayout";
import { NextPageWithLayout } from "../../utils/types";

const UserFiles: NextPageWithLayout = () => {
  return <>UserFiles</>;
};

UserFiles.getLayout = (page) => {
  return <UserLayout>{page}</UserLayout>;
};

export default UserFiles;
