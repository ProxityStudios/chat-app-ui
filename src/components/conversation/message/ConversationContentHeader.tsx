import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { RiUserSettingsLine } from "react-icons/ri";
import { useConversation } from "../../../contexts/ConversationContext";
import { AuthorContentViewContent, ConversationContentHeaderAuthorAction, ConversationContentHeaderAuthorActionsStyle, ConversationContentHeaderAuthorContainerStyle, ConversationContentHeaderAuthorHeadingStyle, ConversationContentHeaderAuthorStyle, ConversationContentHeaderContainerStyle } from "../../../utils/styles/conversation/message/ConversationContentHeader";
import Avatar from "../../Avatar";

export interface ConversationContentHeaderProps { }

export function ConversationContentHeader(props: ConversationContentHeaderProps) {
  const { conversation } = useConversation();
  console.log(conversation);

  return (
    <ConversationContentHeaderContainerStyle>

      <Link href={`/profiles/${conversation?.creator.id}`} passHref>
        <ConversationContentHeaderAuthorContainerStyle>
          <Avatar size={52} src={conversation?.creator.avatarUrl!} />
          <ConversationContentHeaderAuthorStyle>
            <ConversationContentHeaderAuthorHeadingStyle>
              {conversation?.creator.displayName}
            </ConversationContentHeaderAuthorHeadingStyle>
            <AuthorContentViewContent>
              {conversation?.creator.email}
            </AuthorContentViewContent>
          </ConversationContentHeaderAuthorStyle>
        </ConversationContentHeaderAuthorContainerStyle>
      </Link>

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
