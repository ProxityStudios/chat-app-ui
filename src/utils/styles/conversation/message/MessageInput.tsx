import { InputField } from "../..";
import { styled } from "../../../../../stitches.config";

export const ConversationMessageInputView = styled("div", {
  padding: "0 $horizontalBase $horizontalBase $horizontalBase",
});
export const ConversationMessageInputStyle = styled(InputField, {
  maxWidth: 1276,
  margin: "0 auto",
  display: "block",
});
