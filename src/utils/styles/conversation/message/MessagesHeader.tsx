import { IconButton } from "../..";
import { styled } from "../../../../../stitches.config";

export const ConversationMessagesHeaderStyle = styled("header", {
  height: "$conversationTopBase",
  borderBottom: "1px $borderColor solid",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 $horizontalBase",
  overflow: "hidden",
});

export const ConversationAuthorView = styled("div", {
  display: "flex",
  flexShrink: 0,
  cursor: "pointer",
  padding: 10,
  borderRadius: "$base",
  transition: "background 150ms ease-out",
  "&:hover": {
    background: "#6666",
  },
});

export const ConversationAuthorContentView = styled("div", {
  marginLeft: 20,
});
export const ConversationAuthorViewHeading = styled("h3", {
  fontWeight: 400,
  fontSize: "1.700rem",
  marginBottom: 10,
});
export const ConversationAuthorViewContent = styled("em", {
  color: "DimGray",
});
export const ConversationAuthorActions = styled("div", {
  display: "flex",
  alignItems: "center",
  marginRight: 15,
  gap: 20,
});

export const ConversationAuthorAction = styled(IconButton, {});
