import { styled } from "../../../stitches.config";

export const Button = styled("button", {
  border: "none",
  outline: "none",
  borderRadius: "$base",
  fontSize: "1.1rem",
  fontWeight: 600,
  cursor: "pointer",
  transition: "background 200ms ease-out",
  variants: {
    width: {
      full: {
        width: "100%",
      },
    },
    size: {
      small: {
        height: "35px",
        paddingRight: "10px",
        paddingLeft: "10px",
      },
      medium: {
        height: "38px",
        paddingRight: "12.5px",
        paddingLeft: "12.5px",
      },
      large: {
        height: "45px",
        paddingLeft: "15px",
        paddingRight: "15px",
      },
    },
    color: {
      accent: {
        background: "$accent500",
        "&:hover": {
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

export const InputContainer = styled("div", {
  color: "$accent500",
});

export const InputLabel = styled("label", {
  display: "block",
  color: "inherit",
  marginBottom: "10px",
  fontSize: ".8rem",
  fontWeight: 500,
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
});
