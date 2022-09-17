import Link from "next/link";
import { BsCalendarDate, BsPeople } from "react-icons/bs";
import { MdOutlineSpaceDashboard, MdSettingsSuggest } from "react-icons/md";
import { VscFiles } from "react-icons/vsc";
import { IconLink, NavigationBarStyle } from "../utils/styles/NavigationBar";

export interface NavigationBarProps {}

export function NavigationBar(props: NavigationBarProps) {
  return (
    <NavigationBarStyle>
      <Link href={`/conversations`} passHref>
        <IconLink active={true}>
          <MdOutlineSpaceDashboard size={30} />
        </IconLink>
      </Link>
      <Link href={`/friends`} passHref>
        <IconLink>
          <BsPeople size={30} />
        </IconLink>
      </Link>
      <Link href={`/conversations`} passHref>
        <IconLink>
          <VscFiles size={30} />
        </IconLink>
      </Link>
      <Link href={`/conversations`} passHref>
        <IconLink>
          <BsCalendarDate size={30} />
        </IconLink>
      </Link>
      <Link href={`/conversations`} passHref>
        <IconLink>
          <MdSettingsSuggest size={30} />
        </IconLink>
      </Link>
    </NavigationBarStyle>
  );
}

export default NavigationBar;
