import Link from "next/link";
import { useRouter } from "next/router";
import { BsCalendarDate, BsPeople } from "react-icons/bs";
import { MdOutlineSpaceDashboard, MdSettingsSuggest } from "react-icons/md";
import { VscFiles } from "react-icons/vsc";
import { AppNavigationLinkStyle, AppNavigationContainerStyle } from "../utils/styles/AppNavigation";

export interface AppNavigationProps {}

export function AppNavigation(props: AppNavigationProps) {
  const router = useRouter();

  return (
    <AppNavigationContainerStyle>
      <Link href={`/conversations`} passHref>
        <AppNavigationLinkStyle active={router.pathname.startsWith("/conversations")}>
          <MdOutlineSpaceDashboard size={28} />
        </AppNavigationLinkStyle>
      </Link>
      <Link href={`/user/friends`} passHref>
        <AppNavigationLinkStyle active={router.pathname.startsWith("/user/friends")}>
          <BsPeople size={28} />
        </AppNavigationLinkStyle>
      </Link>
      <Link href={`/user/files`} passHref>
        <AppNavigationLinkStyle active={router.pathname.startsWith("/user/files")}>
          <VscFiles size={28} />
        </AppNavigationLinkStyle>
      </Link>
      <Link href={`/user/calendar`} passHref>
        <AppNavigationLinkStyle active={router.pathname.startsWith("/user/calendar")}>
          <BsCalendarDate size={28} />
        </AppNavigationLinkStyle>
      </Link>
      <Link href={`/user/settings`} passHref>
        <AppNavigationLinkStyle active={router.pathname.startsWith("/user/settings")}>
          <MdSettingsSuggest size={28} />
        </AppNavigationLinkStyle>
      </Link>
    </AppNavigationContainerStyle>
  );
}

export default AppNavigation;
