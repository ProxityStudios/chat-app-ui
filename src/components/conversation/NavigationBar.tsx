import Link from "next/link";
import { useRouter } from "next/router";
import { BsCalendarDate, BsPeople } from "react-icons/bs";
import { MdOutlineSpaceDashboard, MdSettingsSuggest } from "react-icons/md";
import { VscFiles } from "react-icons/vsc";
import {
  ConversationNavigationBarStyle,
  IconLink,
} from "../../utils/styles/conversation/ConversationNavigationBar";

export interface ConversationNavigationBarProps {}

export function ConversationNavigationBar(
  props: ConversationNavigationBarProps
) {
  const router = useRouter();

  return (
    <ConversationNavigationBarStyle>
      <Link href={`/conversations/${router.query.conversationId}`} passHref>
        <IconLink active={true}>
          <MdOutlineSpaceDashboard size={40} />
        </IconLink>
      </Link>
      <Link href={`/conversations/${router.query.conversationId}`} passHref>
        <IconLink>
          <VscFiles size={40} />
        </IconLink>
      </Link>
      <Link href={`/conversations/${router.query.conversationId}`} passHref>
        <IconLink>
          <BsCalendarDate size={40} />
        </IconLink>
      </Link>
      <Link href={`/conversations/${router.query.conversationId}`} passHref>
        <IconLink>
          <BsPeople size={40} />
        </IconLink>
      </Link>
      <Link href={`/conversations/${router.query.conversationId}`} passHref>
        <IconLink>
          <MdSettingsSuggest size={40} />
        </IconLink>
      </Link>
    </ConversationNavigationBarStyle>
  );
}

export default ConversationNavigationBar;
