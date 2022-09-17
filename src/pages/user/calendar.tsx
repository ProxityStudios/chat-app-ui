import UserLayout from "../../components/user/UserLayout";
import { NextPageWithLayout } from "../../utils/types";

const UserCalendar: NextPageWithLayout = () => {
  return <>User UserCalendar</>;
};

UserCalendar.getLayout = (page) => {
  return <UserLayout>{page}</UserLayout>;
};

export default UserCalendar;
