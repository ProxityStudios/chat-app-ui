import { IconButton } from "../..";
import { styled } from "../../../../../stitches.config";

export const MessagesHeaderStyle = styled("header", {
  height: "$conversationTopBase",
  borderBottom: "1px $borderColor solid",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 $horizontalBase",
  overflow: "hidden",
});

export const AuthorView = styled("div", {
  display: "flex",
  alignItems: "center",
  padding: "2px 12px",
  height: 70,
  // flexShrink: 0,
  cursor: "pointer",
  borderRadius: "$base",
  maxWidth: 300,
  minWidth: 220,
  transition: "background 150ms ease-out",
  "&:hover": {
    background: "#6666",
  },
});

export const AuthorContentView = styled("div", {
  marginLeft: 12,
});
export const AuthorContentViewHeading = styled("h3", {
  fontWeight: 400,
  fontSize: 19,
  marginTop: 4,
  marginBottom: 6,
});
export const AuthorActions = styled("div", {
  display: "flex",
  alignItems: "center",
  marginRight: 15,
  gap: 20,
});

export const AuthorAction = styled(IconButton, {});
