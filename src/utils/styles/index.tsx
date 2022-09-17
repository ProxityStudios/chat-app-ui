import { styled } from "../../../stitches.config";

export const Link = styled("a", {
  appearance: "none",
  color: "$accent500",
  textDecoration: "underline",
  padding: "0 6px",
  "&:hover": {
    color: "$accent300",
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
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$accent500",
  "&:hover": {
    color: "$accent300",
  },
});

export const Button = styled(BaseButton, {
  padding: "0 20px",
  transition: "background 200ms ease-out, border 200ms ease",
  variants: {
    size: {
      small: {
        height: "32px",
        fontSize: ".92rem",
      },
      medium: {
        height: "37px",
        fontSize: "1.1rem",
      },
      large: {
        height: "42px",
        fontSize: "1.3rem",
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
  marginBottom: "12px",
  fontSize: ".7rem",
  fontWeight: 700,
});

export const InputRequired = styled("span", {
  color: "$red300",
  marginLeft: 4,
  fontSize: "0.8rem",
});

export const InputInformation = styled("p", {
  display: "block",
  color: "SlateGray",
  fontSize: "0.7rem",
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
    border: "1px $accent500 solid",
  },
});
