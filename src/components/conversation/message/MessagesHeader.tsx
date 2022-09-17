import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { RiUserSettingsLine } from "react-icons/ri";
import {
  ConversationAuthorAction,
  ConversationAuthorActions,
  ConversationAuthorContentView,
  ConversationAuthorView,
  ConversationAuthorViewContent,
  ConversationAuthorViewHeading,
  ConversationMessagesHeaderStyle,
} from "../../../utils/styles/conversation/message/MessagesHeader";
import Avatar from "../Avatar";

export interface ConversationMessagesHeaderProps {}

export function ConversationMessagesHeader(
  props: ConversationMessagesHeaderProps
) {
  return (
    <ConversationMessagesHeaderStyle>
      <Link href="#" passHref>
        <ConversationAuthorView>
          <Avatar size={75} src="https://github.com/profile.png" />
          <ConversationAuthorContentView>
            <ConversationAuthorViewHeading>
              Nmaod Hmandosund
            </ConversationAuthorViewHeading>
            <ConversationAuthorViewContent>
              Biography|Online status etc.
            </ConversationAuthorViewContent>
          </ConversationAuthorContentView>
        </ConversationAuthorView>
      </Link>
      <ConversationAuthorActions>
        <ConversationAuthorAction>
          <HiOutlineVideoCamera size={50} />
        </ConversationAuthorAction>
        <ConversationAuthorAction>
          <BsTelephone size={35} />
        </ConversationAuthorAction>
        <ConversationAuthorAction>
          <RiUserSettingsLine size={35} />
        </ConversationAuthorAction>
      </ConversationAuthorActions>
    </ConversationMessagesHeaderStyle>
  );
}

export default ConversationMessagesHeader;
