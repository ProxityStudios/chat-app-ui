import Link from "next/link";
import { useRouter } from "next/router";
import { BsPlusCircleDotted } from "react-icons/bs";
import { messagesInfoBar } from "../../../__mocks__";
import { IconButton } from "../../utils/styles";
import {
  Avatar,
  AvatarContainer,
  AvatarWrapper,
  ConversationMessagesBarStyle,
  MessageInfo,
  MessageInfoContent,
  MessageInfoHeading,
  MessageInfoView,
  MessagesInfo,
  StarusBar,
} from "../../utils/styles/conversation/ConversationMessagesInfoBar";

export interface ConversationMessagesBarInfoProps {}

export function ConversationMessagesInfoBar(
  props: ConversationMessagesBarInfoProps
) {
  const router = useRouter();
  return (
    <ConversationMessagesBarStyle>
      <StarusBar>
        <IconButton>
          <BsPlusCircleDotted size={57} />
        </IconButton>
        <Link href={`/conversations/${router.query.conversationId}`} passHref>
          <AvatarWrapper>
            <AvatarContainer>
              <Avatar
                height={60}
                width={60}
                src="https://github.com/profile.png"
              />
            </AvatarContainer>
          </AvatarWrapper>
        </Link>{" "}
        <Link href={`/conversations/${router.query.conversationId}`} passHref>
          <AvatarWrapper>
            <AvatarContainer>
              <Avatar
                height={60}
                width={60}
                src="https://github.com/profile.png"
              />
            </AvatarContainer>
          </AvatarWrapper>
        </Link>{" "}
        <Link href={`/conversations/${router.query.conversationId}`} passHref>
          <AvatarWrapper>
            <AvatarContainer>
              <Avatar
                height={60}
                width={60}
                src="https://github.com/profile.png"
              />
            </AvatarContainer>
          </AvatarWrapper>
        </Link>
        <Link href={`/conversations/${router.query.conversationId}`} passHref>
          <AvatarWrapper>
            <AvatarContainer>
              <Avatar
                height={60}
                width={60}
                src="https://github.com/profile.png"
              />
            </AvatarContainer>
          </AvatarWrapper>
        </Link>
        <Link href={`/conversations/${router.query.conversationId}`} passHref>
          <AvatarWrapper>
            <AvatarContainer>
              <Avatar
                height={60}
                width={60}
                src="https://github.com/profile.png"
              />
            </AvatarContainer>
          </AvatarWrapper>
        </Link>
      </StarusBar>

      <MessagesInfo>
        {messagesInfoBar.map((messageInfo) => (
          <Link
            key={messageInfo.id}
            href={`/conversations/${messageInfo.id}`}
            passHref
          >
            <MessageInfo>
              <AvatarContainer>
                <Avatar
                  height={60}
                  width={60}
                  src="https://github.com/profile.png"
                />
              </AvatarContainer>
              <MessageInfoView>
                <MessageInfoHeading>
                  {messageInfo.author.name}
                </MessageInfoHeading>
                <MessageInfoContent>{messageInfo.content}</MessageInfoContent>
              </MessageInfoView>
            </MessageInfo>
          </Link>
        ))}
      </MessagesInfo>
    </ConversationMessagesBarStyle>
  );
}

export default ConversationMessagesInfoBar;
