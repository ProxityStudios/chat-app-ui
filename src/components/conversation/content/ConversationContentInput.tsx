import {
  ConversationContentInputContainerStyle, ConversationContentInputStyle
} from "../../../utils/styles/components/conversation/message/ConversationInput";

export interface ConversationInputProps { }

export function ConversationInput(props: ConversationInputProps) {
  return (
    <ConversationContentInputContainerStyle>
      <ConversationContentInputStyle type="text" placeholder="Send a message to ${user.displayName}" />
    </ConversationContentInputContainerStyle>
  );
}

export default ConversationInput;
