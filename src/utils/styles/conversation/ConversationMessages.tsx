import { styled } from "../../../../stitches.config";

export const ConversationMessagesStyle = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const ConversationMessagesContent = styled("div", {
  overflow: "auto",
  flex: 1,
  padding: "40px $horizontalBase",
});
