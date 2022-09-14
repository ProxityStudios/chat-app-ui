import {
  ConversationMessageInputStyle,
  ConversationMessageInputView,
} from "../../../utils/styles/conversation/message/MessageInput";

export interface MessageInputProps {}

export function ConversationMessageInput(props: MessageInputProps) {
  return (
    <ConversationMessageInputView>
      <ConversationMessageInputStyle
        type="text"
        placeholder="Send a Message.."
      />
    </ConversationMessageInputView>
  );
}

export default ConversationMessageInput;
