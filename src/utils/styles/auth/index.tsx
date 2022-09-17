import { styled } from "../../../../stitches.config";

export const AuthPage = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
});

export const AuthPageContainer = styled("div", {
  overflow: "auto",
  background: "$backgroundSecondary",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  "@sm": {
    height: "min-content",
    width: 425,
    borderRadius: "$large",
  },
  padding: "2rem",
});

export const SignInFormHeading = styled("h2", {
  textAlign: "center",
  marginBottom: 42,
});

export const SignInFormInputsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 26,
});

export const SignInFormFooter = styled("span", {
  fontSize: 14,
  display: "block",
  textAlign: "center",
  color: "DarkGray",
});

export const SignUpFormHeading = styled("h2", {
  textAlign: "center",
  marginBottom: "42px",
});

export const SignUpFormInputsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: 26,
});

export const SignUpFormFooter = styled("span", {
  fontSize: 14,
  display: "block",
  textAlign: "center",
  color: "DarkGray",
});
