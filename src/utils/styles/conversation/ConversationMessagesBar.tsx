import Image from "next/image";
import { styled } from "../../../../stitches.config";

export const ConversationMessagesBarStyle = styled("aside", {
  width: 330,
  flexShrink: 0,
  background: "$backgroundSecondary",
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

export const AvatarContainer = styled("a", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "100%",
  background: "$background",
  overflow: "hidden",
  flexShrink: 0,
});
export const Avatar = styled(Image, {});
