import { styled } from "../../../../stitches.config";

export const ConversationContentContainerStyle = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const ConversationContentStyle = styled("div", {
  overflow: "auto",
  flex: 1,
  padding: "40px $horizontalBase",
});
