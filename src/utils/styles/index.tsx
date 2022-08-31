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

export const Button = styled("button", {
  border: "none",
  outline: "none",
  borderRadius: "$base",
  cursor: "pointer",
  transition: "background 200ms ease-out, border 200ms ease",
  padding: "0 20px",
  fontWeight: 500,
  variants: {
    width: {
      full: {
        width: "100%",
      },
    },
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
  display: "block",
  color: "inherit",
  marginBottom: "12px",
  fontSize: ".7rem",
  fontWeight: 700,
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
    color: "$accent900",
  },
  "&:focus": {
    background: "$inputFocusBackground",
    border: "1px $accent500 solid",
  },
  "&:hover": {
    border: "1px $accent500 solid",
  },
});
