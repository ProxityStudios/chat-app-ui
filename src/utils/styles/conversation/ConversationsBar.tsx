import { styled } from "../../../../stitches.config";

export const ConversationsBarStyle = styled("aside", {
  width: 437,
  flexShrink: 0,
  background: "$backgroundSecondary",
  borderRight: "1px $borderColor solid",
  overflow: "auto",
});

export const ConversationStarus = styled("div", {
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

export const Conversations = styled("div", {});

export const Conversation = styled("div", {
  padding: 20,
  borderBottom: "1px $borderColor solid",
  cursor: "pointer",
  transition: "background 150ms ease-out",
  display: "flex",
  overflow: "hidden",
  variants: {
    active: {
      true: {
        background: "#5555",
      },
      false: {
        "&:hover": {
          background: "#4444",
        },
      },
    },
  },
});

export const ConversationView = styled("div", {
  marginLeft: 12,
  width: "100%",
  overflow: "hidden",
});

export const ConversationHead = styled("div", {
  display: "flex",
  justifyContent: "space-between",
});
export const ConversationHeading = styled("h5", {
  marginTop: 6,
  fontWeight: 400,
  fontSize: "1rem",
  letterSpacing: 0.2,
});
export const ConversationLastMessageSentAt = styled("span", {
  color: "DimGray",
  variants: {
    isUnreaded: {
      true: {
        color: "$green500",
      },
    },
  },
});

export const ConversationContentView = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: 8,
  color: "DimGray",
  variants: {
    isUnreaded: {
      true: {
        color: "$green500",
      },
    },
  },
});
export const ConversationContent = styled("p", {
  whiteSpace: "nowrap",
  display: "inline-block",
  fontSize: "0.875rem",
  color: "DimGray",
  width: "82%",
  overflow: "hidden",
  textOverflow: "ellipsis",
});
export const ConversationContentIsTyping = styled("em", {
  color: "$green500",
});
export const ConversationUnreadedMessagesCount = styled("span", {
  background: "$green500",
  color: "black",
  borderRadius: "100%",
  fontSize: "0.875rem",
  fontWeight: 500,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 20,
  minWidth: 20,
  padding: 3,
});