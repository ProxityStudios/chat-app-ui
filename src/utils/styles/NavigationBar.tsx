import { styled } from "../../../stitches.config";
import { Link } from "./index";

export const NavigationBarStyle = styled("aside", {
  width: 75,
  flexShrink: 0,
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 30,
  borderRight: "1px $borderColor solid",
});

export const IconLink = styled(Link, {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  variants: {
    active: {
      true: {
        background: "#5555",
        color: "$accent300",
        padding: 10,
        borderRadius: "$xlarge",
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
