import Link from "next/link";
import { useRouter } from "next/router";
import { BsPlusCircleDotted } from "react-icons/bs";
import { messagesInfoBar } from "../../../__mocks__";
import { IconButton } from "../../utils/styles";
import {
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
import Avatar from "./Avatar";

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
        {messagesInfoBar
          .filter((messageInfo) => messageInfo.is_stared)
          .map((messageInfo) => (
            <Link
              key={messageInfo.id}
              href={`/conversations/${messageInfo.id}`}
            >
              <Avatar size={57} src={messageInfo.author.avatar_url} />
            </Link>
          ))}
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
              <Avatar size={57} src={messageInfo.author.avatar_url} />
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
