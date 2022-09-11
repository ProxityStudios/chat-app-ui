import Image from "next/image";
import { styled } from "../../../../stitches.config";

export const ConversationMessagesBarStyle = styled("aside", {
  width: 330,
  flexShrink: 0,
  background: "$backgroundSecondary",
  borderRight: "1px $borderColor solid",
  overflow: "auto",
});

export const StarusBar = styled("div", {
  padding: "0 20px",
  height: "$conversationTopBase",
  borderBottom: "1px $borderColor solid",
  display: "flex",
  alignItems: "center",
  overflow: "auto",
  gap: 12,
  "-msOverflowStyle": "none",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

export const AvatarWrapper = styled("a", {
  flexShrink: 0,
});
export const AvatarContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "100%",
  background: "$background",
  overflow: "hidden",
});
export const Avatar = styled(Image, {});

export const MessagesInfo = styled("div", {});
export const MessageInfo = styled("a", {
  display: "flex",
  padding: 20,
  borderTop: "1px $borderColor solid",
  borderBottom: "1px $borderColor solid",
  color: "unset",
  textDecoration: "none",
  transition: "background 150ms ease-out",
  "&:hover": {
    background: "#4444",
  },
});
export const MessageInfoView = styled("div", {
  marginLeft: 12,
});
export const MessageInfoHeading = styled("h5", {
  marginTop: 6,
  fontWeight: 500,
  fontSize: "1.05rem",
});
export const MessageInfoContent = styled("span", {
  fontSize: "0.7rem",
  color: "DimGray",
});
