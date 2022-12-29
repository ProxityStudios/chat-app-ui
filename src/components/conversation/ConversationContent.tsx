import { useRouter } from "next/router";
import {
  ConversationContentContainerStyle, ConversationContentStyle
} from "../../utils/styles/conversation/ConversationContent";
import ConversationContentHeaderStyle from "./content/ConversationContentHeader";
import ConversationInput from "./content/ConversationInput";

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
