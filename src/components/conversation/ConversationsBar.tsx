import Link from "next/link";
import { useRouter } from "next/router";
import { BsPlusCircleDotted } from "react-icons/bs";
import { __conversations__ } from "../../../__mocks__/conversations";
import { IconButton } from "../../utils/styles";
import {
  Conversation,
  ConversationContent,
  ConversationContentIsTyping,
  ConversationContentView,
  ConversationHead,
  ConversationHeading,
  ConversationLastMessageSentAt,
  Conversations,
  ConversationsBarStyle,
  ConversationStarus,
  ConversationUnreadedMessagesCount,
  ConversationView,
} from "../../utils/styles/conversation/ConversationsBar";
import Avatar from "../Avatar";

export interface ConversationsBarProps {}

export function ConversationsBar(props: ConversationsBarProps) {
  const router = useRouter();

  return (
    <ConversationsBarStyle>
      <ConversationStarus>
        <IconButton>
          <BsPlusCircleDotted size={57} />
        </IconButton>
        {__conversations__
          .filter((conversation) => conversation.isStared)
          .map((conversation) => (
            <Link
              key={conversation.id}
              href={`/conversations/${conversation.id}`}
            >
              <Avatar size={57} src={conversation.creator.avatarUrl} />
            </Link>
          ))}
      </ConversationStarus>

      <Conversations>
        {__conversations__.map((conversation) => (
          <Link
            key={conversation.id}
            href={`/conversations/${conversation.id}`}
            passHref
          >
            <Conversation
              active={router.asPath === `/conversations/${conversation.id}`}
            >
              <Avatar size={57} src={conversation.creator.avatarUrl} />
              <ConversationView>
                <ConversationHead>
                  <ConversationHeading>
                    {conversation.creator.displayName}
                  </ConversationHeading>
                  <ConversationLastMessageSentAt
                    isUnreaded={conversation.isUnreaded}
                  >
                    {conversation.lastMessageSentAt &&
                      conversation.lastMessageSentAt.toDateString()}
                  </ConversationLastMessageSentAt>
                </ConversationHead>
                <ConversationContentView isUnreaded={conversation.isUnreaded}>
                  <ConversationContent>
                    {conversation.isTyping ? (
                      <ConversationContentIsTyping>
                        {conversation.creator.displayName} is typing...
                      </ConversationContentIsTyping>
                    ) : (
                      conversation.messages.slice(-1)[0].content
                    )}
                  </ConversationContent>
                  {conversation.isUnreaded && (
                    <ConversationUnreadedMessagesCount>
                      {conversation.unreadedMessagesCount}
                    </ConversationUnreadedMessagesCount>
                  )}
                </ConversationContentView>
              </ConversationView>
            </Conversation>
          </Link>
        ))}
      </Conversations>
    </ConversationsBarStyle>
  );
}

export default ConversationsBar;
