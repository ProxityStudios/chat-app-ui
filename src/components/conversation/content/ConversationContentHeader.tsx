import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { RiUserSettingsLine } from "react-icons/ri";
import { useConversation } from "../../../contexts/ConversationContext";
import { ConversationContentHeaderAuthorAction, ConversationContentHeaderAuthorActionsStyle, ConversationContentHeaderAuthorContainerStyle, ConversationContentHeaderAuthorEmailStyle, ConversationContentHeaderAuthorHeadingStyle, ConversationContentHeaderAuthorStyle, ConversationContentHeaderContainerStyle } from "../../../utils/styles/components/conversation/message/ConversationContentHeader";
import Avatar from "../../Avatar";

export interface ConversationContentHeaderProps { }

export function ConversationContentHeader(props: ConversationContentHeaderProps) {
  const { conversation } = useConversation();

  return (
    <ConversationContentHeaderContainerStyle>
      <Link href={`/profiles/${conversation?.creator.id}`} passHref>
        <ConversationContentHeaderAuthorContainerStyle>
          <Avatar size={52} src={conversation?.creator.avatarUrl!} />
          <ConversationContentHeaderAuthorStyle>
            <ConversationContentHeaderAuthorHeadingStyle>
              {conversation?.creator.displayName}
            </ConversationContentHeaderAuthorHeadingStyle>
            <ConversationContentHeaderAuthorEmailStyle>
              {conversation?.creator.email}
            </ConversationContentHeaderAuthorEmailStyle>
          </ConversationContentHeaderAuthorStyle>
        </ConversationContentHeaderAuthorContainerStyle>
      </Link>

      {/* actions to conversation author */}

      <ConversationContentHeaderAuthorActionsStyle>
        <ConversationContentHeaderAuthorAction>
          <HiOutlineVideoCamera size={30} />
        </ConversationContentHeaderAuthorAction>
        <ConversationContentHeaderAuthorAction>
          <BsTelephone size={22} />
        </ConversationContentHeaderAuthorAction>
        <ConversationContentHeaderAuthorAction>
          <RiUserSettingsLine size={25} />
        </ConversationContentHeaderAuthorAction>
      </ConversationContentHeaderAuthorActionsStyle>
    </ConversationContentHeaderContainerStyle>
  );
}

export default ConversationContentHeader;
