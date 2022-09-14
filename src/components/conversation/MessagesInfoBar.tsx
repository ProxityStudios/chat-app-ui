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
  MessageInfoContentIsTyping,
  MessageInfoContentView,
  MessageInfoHeading,
  MessageInfoHeadingView,
  MessageInfoSentAt,
  MessageInfoUnreadedMessagesCount,
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
        <Link href={`/conversations/1`} passHref>
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
        <Link href={`/conversations/2`} passHref>
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
        <Link href={`/conversations/3`} passHref>
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
        <Link href={`/conversations/4`} passHref>
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
        <Link href={`/conversations/4`} passHref>
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
        <Link href={`/conversations/4`} passHref>
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
        <Link href={`/conversations/4`} passHref>
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
        <Link href={`/conversations/4`} passHref>
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
            <MessageInfo
              active={router.asPath === `/conversations/${messageInfo.id}`}
            >
              <AvatarContainer>
                <Avatar
                  height={60}
                  width={60}
                  src="https://github.com/profile.png"
                />
              </AvatarContainer>
              <MessageInfoView>
                <MessageInfoHeadingView>
                  <MessageInfoHeading>
                    {messageInfo.author.name}
                  </MessageInfoHeading>
                  <MessageInfoSentAt isUnreaded={messageInfo.is_unreaded}>
                    {messageInfo.sent_at}
                  </MessageInfoSentAt>
                </MessageInfoHeadingView>
                <MessageInfoContentView isUnreaded={messageInfo.is_unreaded}>
                  <MessageInfoContent>
                    {messageInfo.is_typing ? (
                      <MessageInfoContentIsTyping>
                        {messageInfo.author.name} is typing...
                      </MessageInfoContentIsTyping>
                    ) : (
                      messageInfo.content
                    )}
                  </MessageInfoContent>
                  {messageInfo.unreaded_messages_count &&
                    messageInfo.is_unreaded && (
                      <MessageInfoUnreadedMessagesCount>
                        {messageInfo.unreaded_messages_count}
                      </MessageInfoUnreadedMessagesCount>
                    )}
                </MessageInfoContentView>
              </MessageInfoView>
            </MessageInfo>
          </Link>
        ))}
      </MessagesInfo>
    </ConversationMessagesBarStyle>
  );
}

export default ConversationMessagesInfoBar;
