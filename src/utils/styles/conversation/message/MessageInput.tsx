import { InputField } from "../..";
import { styled } from "../../../../../stitches.config";

export const MessageInputView = styled("div", {
  padding: "0 $horizontalBase $horizontalBase $horizontalBase",
});
export const MessageInputStyle = styled(InputField, {
  maxWidth: 1276,
  margin: "0 auto",
  display: "block",
});
