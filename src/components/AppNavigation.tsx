import Link from "next/link";
import { useRouter } from "next/router";
import { BsCalendarDate, BsPeople } from "react-icons/bs";
import { MdOutlineSpaceDashboard, MdSettingsSuggest } from "react-icons/md";
import { VscFiles } from "react-icons/vsc";
import { AppNavigationContainerStyle, AppNavigationLinksStyle } from "../utils/styles/components/AppNavigation";
import { FiLogOut } from "react-icons/fi"
import IconLink from "../utils/styles/links/IconLink";
import IconButton from "../utils/styles/links/IconButton";
import { useAuth } from "../contexts/AuthContext";

export interface AppNavigationProps { }

const navigationLinks = [
  { href: "/conversations", icon: <MdOutlineSpaceDashboard /> },
  { href: "/user/friends", icon: <BsPeople /> },
  { href: "/user/files", icon: <VscFiles /> },
  { href: "/user/calendar", icon: <BsCalendarDate /> },
  { href: "/user/settings", icon: <MdSettingsSuggest /> }
];

export function AppNavigation(props: AppNavigationProps) {
  const router = useRouter();
  const { logout } = useAuth();

  return (
    <AppNavigationContainerStyle>
      <AppNavigationLinksStyle>
        {navigationLinks.map((link, key) => (
          <Link key={key} href={link.href} passHref>
            <IconLink square active={router.pathname.startsWith(link.href)}>
              {link.icon}
            </IconLink>
          </Link>
        ))}
      </AppNavigationLinksStyle>

      <IconButton onClick={logout} style={{ margin: "10px auto 0 auto"}}>
        <FiLogOut />
      </IconButton>

    </AppNavigationContainerStyle>
  );
}

export default AppNavigation;
