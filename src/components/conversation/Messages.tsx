import { useRouter } from "next/router";
import {
  ConversationMessagesContent,
  ConversationMessagesStyle,
} from "../../utils/styles/conversation/ConversationMessages";
import ConversationMessageInput from "./message/MessageInput";
import ConversationMessagesHeader from "./message/MessagesHeader";

export interface ConversationMessagesProps {}

export function ConversationMessages(props: ConversationMessagesProps) {
  const router = useRouter();
  return (
    <ConversationMessagesStyle>
      <ConversationMessagesHeader />
      <ConversationMessagesContent>
        Messages... {router.query.conversationId}
      </ConversationMessagesContent>
      <ConversationMessageInput />
    </ConversationMessagesStyle>
  );
}

export default ConversationMessages;
