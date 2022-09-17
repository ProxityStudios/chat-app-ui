import {
  MessageInputStyle,
  MessageInputView,
} from "../../../utils/styles/conversation/message/MessageInput";

export interface MessageInputProps {}

export function MessageInput(props: MessageInputProps) {
  return (
    <MessageInputView>
      <MessageInputStyle type="text" placeholder="Type your Message" />
    </MessageInputView>
  );
}

export default MessageInput;
