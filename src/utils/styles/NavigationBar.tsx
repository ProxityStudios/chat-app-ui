import { styled } from "../../../stitches.config";
import { Link } from "./index";

export const NavigationBarStyle = styled("aside", {
  width: 75,
  flexShrink: 0,
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: 3,
  padding: "20px 0",
  borderRight: "1px $borderColor solid",
});

export const IconLink = styled(Link, {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 10,
  borderRadius: "$xlarge",
  transition: "110ms background ease-out",
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
      false: {
        "&:hover": {
          background: "#222",
        },
      },
    },
  },
});
