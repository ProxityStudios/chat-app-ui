import { styled } from "../../../../stitches.config";

export const IconLink = styled("a", {
  position: "relative",
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$accent500",
  borderRadius: "100%",
  transition: "150ms all ease-out",
  border: 0,
  "&:hover": {
    background: "#222",
    color: "$accent300",
  },
  "&:focus-visible": {
    background: "#222",
    color: "$accent300",
    border: "1px $accent500 solid",
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
    size: {
      sm: {
        width: 45,
        height: 45,
        "& > svg": {
          width: 24,
          height: 24,
        }
      },
      md: {
        width: 55,
        height: 55,
        "& > svg": {
          width: 28,
          height: 28,
        }
      }
    },
    square: {
      true: {
        borderRadius: "$xlarge",
      },
    }
  },
  defaultVariants: {
    size: "md",
    square: true
  }
});
export default IconLink;