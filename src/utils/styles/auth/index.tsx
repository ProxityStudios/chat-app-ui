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
  gap: "30px",
});
