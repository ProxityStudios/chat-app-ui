import Link from "next/link";
import { useRouter } from "next/router";
import { BsCalendarDate, BsPeople } from "react-icons/bs";
import { MdOutlineSpaceDashboard, MdSettingsSuggest } from "react-icons/md";
import { VscFiles } from "react-icons/vsc";
import { IconLink, NavigationBarStyle } from "../utils/styles/NavigationBar";

export interface NavigationBarProps {}

export function NavigationBar(props: NavigationBarProps) {
  const router = useRouter();

  return (
    <NavigationBarStyle>
      <Link href={`/conversations`} passHref>
        <IconLink active={router.pathname.startsWith("/conversations")}>
          <MdOutlineSpaceDashboard size={28} />
        </IconLink>
      </Link>
      <Link href={`/user/friends`} passHref>
        <IconLink active={router.pathname.startsWith("/user/friends")}>
          <BsPeople size={28} />
        </IconLink>
      </Link>
      <Link href={`/user/files`} passHref>
        <IconLink active={router.pathname.startsWith("/user/files")}>
          <VscFiles size={28} />
        </IconLink>
      </Link>
      <Link href={`/user/calendar`} passHref>
        <IconLink active={router.pathname.startsWith("/user/calendar")}>
          <BsCalendarDate size={28} />
        </IconLink>
      </Link>
      <Link href={`/user/settings`} passHref>
        <IconLink active={router.pathname.startsWith("/user/settings")}>
          <MdSettingsSuggest size={28} />
        </IconLink>
      </Link>
    </NavigationBarStyle>
  );
}

export default NavigationBar;
