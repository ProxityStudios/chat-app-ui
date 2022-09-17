import UserLayout from "../../components/user/UserLayout";
import { NextPageWithLayout } from "../../utils/types";

const UserSettings: NextPageWithLayout = () => {
  return <>User settings</>;
};

UserSettings.getLayout = (page) => {
  return <UserLayout>{page}</UserLayout>;
};

export default UserSettings;
