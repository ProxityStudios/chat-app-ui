import { styled } from "../../../stitches.config";

export const Link = styled("a", {
  appearance: "none",
  color: "$accent500",
  textDecoration: "none",
  padding: "0 6px",
  "&:hover": {
    color: "$accent300",
    textDecoration: "underline",
  },
});

export const BaseButton = styled("button", {
  appearance: "none",
  border: "none",
  outline: "none",
  borderRadius: "$base",
  cursor: "pointer",
  background: "transparent",
  fontWeight: 500,
  variants: {
    width: {
      full: {
        width: "100%",
      },
    },
  },
});
export const IconButton = styled(BaseButton, {
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$accent500",
  borderRadius: "100%",
  "&:hover": {
    color: "$accent300",
  },
  "&:focus": {
    outline: "1px white solid",
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
    square: {
      true: {
        borderRadius: "$xlarge",
      },
    }
  },
  defaultVariants: {
    size: "md"
  }
});

export const Button = styled(BaseButton, {
  padding: "2px 16px",
  transition: "background 200ms ease-out, border 200ms ease",
  whiteSpace: "nowrap",
  textoverflow: "ellipsis",
  overflow: "hidden",
  fontWeight: 500,
  fontSize: "100%",
  variants: {
    size: {
      small: {
        height: 30,
        fontWeight: 16,
      },
      medium: {
        height: 35,
        fontWeight: 16,
      },
      large: {
        height: 44,
        fontWeight: 18,
      },
    },
    color: {
      accent: {
        background: "$accent500",
        color: "black",
        "&:hover": {
          background: "$accent600",
        },
        "&:focus": {
          background: "$accent600",
        },
        "&:active": {
          background: "$accent700",
        },
      },
    },
  },
  defaultVariants: {
    size: "medium",
    color: "accent",
  },
});

export const Divider = styled("hr", {
  appearance: "none",
  border: "none",
  display: "block",
  background: "$dividerColor",
  height: "1px",
  variants: {
    spacing: {
      small: {
        marginTop: "25px",
        marginBottom: "25px",
      },
      medium: {
        marginTop: "30px",
        marginBottom: "30px",
      },
    },
    view: {
      shortened: {
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
      },
    },
  },
  defaultVariants: {
    spacing: "medium",
  },
});

export const InputContainer = styled("div", {
  color: "$accent500",
});

export const InputLabel = styled("label", {
  textTransform: "uppercase",
  display: "inline-block",
  color: "inherit",
  marginBottom: 12,
  fontSize: 12,
  fontWeight: 700,
});

export const InputRequired = styled("span", {
  color: "$red300",
  marginLeft: 4,
  fontSize: 10,
});

export const InputInformation = styled("p", {
  display: "block",
  color: "DarkGray",
  fontSize: 12,
  fontWeight: 400,
  marginTop: 10,
  marginLeft: 2,
});

export const InputField = styled("input", {
  outline: "none",
  background: "$inputBackground",
  width: "100%",
  borderRadius: "$base",
  padding: "12px 10px",
  color: "$accent200",
  transition: "border 200ms",
  border: "1px $inputBackground solid",
  "&::placeholder": {
    color: "SlateGray",
  },
  "&:focus": {
    background: "$inputFocusBackground",
    border: "1px $accent500 solid",
  },
  "&:hover": {
    // border: "1px $accent500 solid",
  },
});
