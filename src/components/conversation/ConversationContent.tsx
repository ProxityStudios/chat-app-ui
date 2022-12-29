import { useRouter } from "next/router";
import {
  ConversationContentContainerStyle, ConversationContentStyle
} from "../../utils/styles/conversation/ConversationMessages";
import ConversationContentHeaderStyle from "./message/ConversationContentHeader";
import ConversationInput from "./message/ConversationInput";

export interface ConversationContentProps { }

export function ConversationContent(props: ConversationContentProps) {
  const router = useRouter();

  return (
    <ConversationContentContainerStyle>
      <ConversationContentHeaderStyle />

      <ConversationContentStyle>
        Messages goes here... {router.query.conversationId}
      </ConversationContentStyle>
      <ConversationInput />

    </ConversationContentContainerStyle>
  );
}

export default ConversationContent;
