import { useRouter } from "next/router";
import {
  ConversationMessagesContent,
  ConversationMessagesStyle,
} from "../../utils/styles/conversation/ConversationMessages";
import MessageInput from "./message/MessageInput";
import MessagesHeader from "./message/MessagesHeader";

export interface ConversationMessagesProps {}

export function ConversationMessages(props: ConversationMessagesProps) {
  const router = useRouter();
  return (
    <ConversationMessagesStyle>
      <MessagesHeader />
      <ConversationMessagesContent>
        Messages... {router.query.conversationId}
      </ConversationMessagesContent>
      <MessageInput />
    </ConversationMessagesStyle>
  );
}

export default ConversationMessages;
