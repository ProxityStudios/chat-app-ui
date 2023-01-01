import { styled } from "../../../../stitches.config";
import { IconButton, Link } from "../index";

export const AppNavigationLinksStyle = styled("div", {
  gap: 3,
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
})

export const AppNavigationContainerStyle = styled("aside", {
  width: 75,
  flexShrink: 0,
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "20px 0",
  borderRight: "1px $borderColor solid",
});

export const AppNavigationLinkStyle = styled(Link, {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 55,
  height: 55,
  borderRadius: "$xlarge",
  transition: "110ms background ease-out",
  "&:hover": {
    background: "#222",
  },
  variants: {
    active: {
      true: {
        background: "#5555",
        color: "$accent300",
        "&::after": {
          content: "",
          borderRadius: "$xlarge",
          position: "absolute",
          left: 0,
          top: "50%",
          bottom: "50%",
          transform: "translateY(-50%)",
          background: "$accent300",
          width: 4,
          height: "45%",
        },
      },
    },
  },
});
