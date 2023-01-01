import Link from "next/link";
import { useRouter } from "next/router";
import { BsPlusCircleDotted } from "react-icons/bs";
import { __conversations__ } from "../../../__mocks__/conversations";
import { IconButton } from "../../utils/styles/links/IconButton";
import {
  ConversationStyle,
  ConversationContent,
  ConversationContentIsTyping,
  ConversationContentView,
  ConversationHead,
  ConversationHeading,
  ConversationLastMessageSentAt,
  ConversationsContentStyle,
  ConversationsContainerStyle,
  ConversationStarusContainerStyle,
  ConversationUnreadedMessagesCount,
  ConversationContentStyle,
  ConversationStarusContentStyle,
} from "../../utils/styles/components/conversation/Conversations";
import Avatar from "../Avatar";

export interface ConversationsProps {}

export function Conversations(props: ConversationsProps) {
  const router = useRouter();

  return (
    <ConversationsContainerStyle>
      <ConversationStarusContainerStyle>
        <IconButton size="md" circle>
          <BsPlusCircleDotted  style={{ width: "45px !important", height: "45px !important"}}/>
        </IconButton>

        {__conversations__
          .filter((conversation) => conversation.isStared)
          .map((conversation) => (
            <Link
              key={conversation.id}
              href={`/conversations/${conversation.id}`}
              passHref
            >
           <ConversationStarusContentStyle>
           <Avatar size={45} src={conversation.creator.avatarUrl} />
           </ConversationStarusContentStyle>
            </Link>
          ))}
      </ConversationStarusContainerStyle>

      <ConversationsContentStyle>
        {__conversations__.map((c) => (
          <Link
            key={c.id}
            href={`/conversations/${c.id}`}
            passHref
          >
            <ConversationStyle
              active={router.asPath === `/conversations/${c.id}`}
            >
              <Avatar size={50} src={c.creator.avatarUrl} />
              <ConversationContentStyle>
                <ConversationHead>
                  <ConversationHeading>
                    {c.creator.displayName}
                  </ConversationHeading>
                  <ConversationLastMessageSentAt
                    isUnreaded={c.isUnreaded}
                  >
                    {/* {conversation.lastMessageSentAt &&
                      conversation.lastMessageSentAt.toDateString()} */}
                    today
                  </ConversationLastMessageSentAt>
                </ConversationHead>
                <ConversationContentView isUnreaded={c.isUnreaded}>
                  <ConversationContent>
                    {c.isTyping ? (
                      <ConversationContentIsTyping>
                        {c.creator.displayName} is typing...
                      </ConversationContentIsTyping>
                    ) : (
                      c.messages.slice(-1)[0].content
                    )}
                  </ConversationContent>
                  {c.isUnreaded && (
                    <ConversationUnreadedMessagesCount>
                      {c.unreadedMessagesCount}
                    </ConversationUnreadedMessagesCount>
                  )}
                </ConversationContentView>
              </ConversationContentStyle>
            </ConversationStyle>
          </Link>
        ))}
      </ConversationsContentStyle>
    </ConversationsContainerStyle>
  );
}

export default Conversations;
