import { styled } from "../../../../stitches.config";

export const UserLayoutStyle = styled("div", {
  position: "relative",
  zIndex: 0,
  display: "flex",
  flexDirection: "column",
  height: "100%",
  minHeight: "100%",
  overflow: "hidden",
});

export const UserView = styled("main", {
  flex: 1,
  height: "100%",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "stretch",
  overflow: "hidden",
});
