import { styled } from "../../../../stitches.config";

export const ServerHeaderStyle = styled("header", {
  position: "sticky",
  top: 0,
  height: 60,
  background: "rgba($backgroundSecondaryRgb, 0.8)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 30px",
  borderBottom: "2px $borderColor solid",
  backdropFilter: "blur(4px)",
});
