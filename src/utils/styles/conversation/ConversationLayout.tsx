import { styled } from "../../../../stitches.config";

export const ConversationLayoutStyle = styled("div", {
  position: "relative",
  zIndex: 0,
  display: "flex",
  flexDirection: "column",
  height: "100%",
  minHeight: "100%",
  overflow: "hidden",
});

export const ConversationContent = styled("main", {
  flex: 1,
  height: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "stretch",
  overflow: "hidden",
});
