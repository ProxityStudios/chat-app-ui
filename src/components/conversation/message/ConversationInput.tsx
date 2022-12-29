import {
  ConversationInputContainerStyle, ConversationInputStyle
} from "../../../utils/styles/conversation/message/ConversationInput";

export interface ConversationInputProps { }

export function ConversationInput(props: ConversationInputProps) {
  return (
    <ConversationInputContainerStyle>
      <ConversationInputStyle type="text" placeholder="Send a message to ${user.displayName}" />
    </ConversationInputContainerStyle>
  );
}

export default ConversationInput;
