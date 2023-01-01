import { BaseButton } from "..";
import { styled } from "../../../../stitches.config";

export const IconButton = styled(BaseButton, {
  appearance: "none",
  color: "$accent500",
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "none",
  borderRadius: "$xlarge",
  "&:hover": {
    color: "$accent300",
  },
  "&:focus-visible": {
    background: "#222",
    color: "$accent300",
    border: "1px $accent500 solid",
  },
  variants: {
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
    circle: {
      true: {
        borderRadius: "100%",
      },
    }
  },
  defaultVariants: {
    size: "md",
    circle: false,
  }
});
export default IconButton;