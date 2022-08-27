import { styled } from "../../../../stitches.config";

export const SignInView = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
});

export const SignInContainer = styled("div", {
  background: "$backgroundSecondary",
  borderRadius: "$large",
  minHeight: "300px",
  minWidth: "450px",
  padding: "2rem",
});

export const SignInFormHeading = styled("h2", {
  textAlign: "center",
  marginBottom: "42px",
});

export const SignInFormInputsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "26px",
});

export const SignInFormFooter = styled("span", {
  fontSize: "14px",
  display: "block",
  textAlign: "center",
  color: "#accent200",
  "> a": {
    marginLeft: "10px",
  },
});

// Sign up
export const SignUpView = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
});

export const SignUpContainer = styled("div", {
  background: "$backgroundSecondary",
  borderRadius: "$large",
  minHeight: "300px",
  minWidth: "450px",
  padding: "2rem",
});

export const SignUpFormHeading = styled("h2", {
  textAlign: "center",
  marginBottom: "42px",
});

export const SignUpFormInputsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "26px",
});

export const SignUpFormFooter = styled("span", {
  fontSize: "14px",
  display: "block",
  textAlign: "center",
  color: "#accent200",
  "> a": {
    marginLeft: "10px",
  },
});
