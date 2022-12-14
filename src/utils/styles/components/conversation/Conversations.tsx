import { styled } from "../../../../../stitches.config";

export const ConversationsContainerStyle = styled("aside", {
  width: 300,
  flexShrink: 0,
  background: "$backgroundSecondary",
  borderRight: "1px $borderColor solid",
  overflow: "auto",
});


export const ConversationStarusContainerStyle = styled("div", {
  padding: "0 12px",
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

export const ConversationStarusContentStyle = styled("a", {
  transition: "150ms all ease-out",
  border: 0,
  "&:focus-visible": {
    border: "1px $accent500 solid",
  },
});

export const ConversationsContentStyle = styled("div", {});

export const ConversationStyle = styled("a", {
  padding: "16px 12px",
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

export const ConversationContentStyle = styled("div", {
  marginLeft: 12,
  width: "100%",
  overflow: "hidden",
});

export const ConversationHead = styled("div", {
  display: "flex",
  justifyContent: "space-between",
});
export const ConversationHeading = styled("h5", {
  marginTop: 4,
  fontWeight: 400,
  fontSize: 16,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});
export const ConversationLastMessageSentAt = styled("span", {
  color: "DarkGray",
  fontWeight: 500,
  fontSize: "0.75rem",
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
  marginTop: 6,
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
  fontSize: 13,
  color: "Gray",
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
  fontSize: "0.75rem",
  fontWeight: 500,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 20,
  minWidth: 20,
  padding: 2,
});
