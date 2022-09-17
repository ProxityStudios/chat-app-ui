import UserLayout from "../../components/user/UserLayout";
import { NextPageWithLayout } from "../../utils/types";

const UserFriends: NextPageWithLayout = () => {
  return <>User friends</>;
};

UserFriends.getLayout = (page) => {
  return <UserLayout>{page}</UserLayout>;
};

export default UserFriends;
