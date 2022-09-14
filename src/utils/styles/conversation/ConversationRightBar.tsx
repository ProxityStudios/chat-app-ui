import { styled } from "../../../../stitches.config";

export const ConversationRightBarStyle = styled("aside", {
  flexShrink: 0,
  borderLeft: "1px $borderColor solid",
  width: 200,
  "@lg": {
    width: 450,
  },
});
