import Link from "next/link";
import { useRouter } from "next/router";
import { BsPlusCircleDotted } from "react-icons/bs";
import { IconButton } from "../../utils/styles";
import {
  Avatar,
  AvatarContainer,
  ConversationMessagesBarStyle,
  StarusBar,
} from "../../utils/styles/conversation/ConversationMessagesBar";

export interface ConversationMessagesBarProps {}

export function ConversationMessagesBar(props: ConversationMessagesBarProps) {
  const router = useRouter();
  return (
    <ConversationMessagesBarStyle>
      <StarusBar>
        <IconButton>
          <BsPlusCircleDotted size={57} />
        </IconButton>
        <Link href={`/conversations/${router.query.conversationId}`} passHref>
          <AvatarContainer>
            <Avatar
              height={60}
              width={60}
              src="https://github.com/profile.png"
            />
          </AvatarContainer>
        </Link>
        <Link href={`/conversations/${router.query.conversationId}`} passHref>
          <AvatarContainer>
            <Avatar
              height={60}
              width={60}
              src="https://github.com/profile.png"
            />
          </AvatarContainer>
        </Link>
        <Link href={`/conversations/${router.query.conversationId}`} passHref>
          <AvatarContainer>
            <Avatar
              height={60}
              width={60}
              src="https://github.com/profile.png"
            />
          </AvatarContainer>
        </Link>
        <Link href={`/conversations/${router.query.conversationId}`} passHref>
          <AvatarContainer>
            <Avatar
              height={60}
              width={60}
              src="https://github.com/profile.png"
            />
          </AvatarContainer>
        </Link>
      </StarusBar>
    </ConversationMessagesBarStyle>
  );
}

export default ConversationMessagesBar;
