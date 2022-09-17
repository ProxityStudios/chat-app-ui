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
  flexShrink: 0,
  cursor: "pointer",
  padding: 10,
  borderRadius: "$base",
  transition: "background 150ms ease-out",
  "&:hover": {
    background: "#6666",
  },
});

export const AuthorContentView = styled("div", {
  marginLeft: 20,
});
export const AuthorContentViewHeading = styled("h3", {
  fontWeight: 400,
  fontSize: "1.700rem",
  marginBottom: 10,
});
export const AuthorContentViewContent = styled("em", {
  color: "DimGray",
});
export const AuthorActions = styled("div", {
  display: "flex",
  alignItems: "center",
  marginRight: 15,
  gap: 20,
});

export const AuthorAction = styled(IconButton, {});
