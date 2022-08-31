import { styled } from "../../../stitches.config";

export const LayoutView = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
});

export const ContentWithNavbar = styled("div", {
  flex: 1,
  width: "100%",
  height: "100%",
});
export const LayoutContentWrapper = styled("main", {
  width: "100%",
  height: "calc(100% - 60px)",
  overflowY: "scroll",
});

export const Button = styled("button", {
  border: "none",
  outline: "none",
  borderRadius: "$base",
  fontSize: "1.1rem",
  fontWeight: 500,
  cursor: "pointer",
  transition: "background 200ms ease-out, border 200ms ease ",
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
