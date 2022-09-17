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
          <MdOutlineSpaceDashboard size={40} />
        </IconLink>
      </Link>
      <Link href={`/conversations`} passHref>
        <IconLink>
          <VscFiles size={40} />
        </IconLink>
      </Link>
      <Link href={`/conversations`} passHref>
        <IconLink>
          <BsCalendarDate size={40} />
        </IconLink>
      </Link>
      <Link href={`/conversations`} passHref>
        <IconLink>
          <BsPeople size={40} />
        </IconLink>
      </Link>
      <Link href={`/conversations`} passHref>
        <IconLink>
          <MdSettingsSuggest size={40} />
        </IconLink>
      </Link>
    </NavigationBarStyle>
  );
}

export default NavigationBar;
