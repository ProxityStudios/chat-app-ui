import { styled } from "../../../../stitches.config";

export const ServerSideBarStyle = styled("aside", {
  gridArea: "sidebar-view",
  flexShrink: 0,
  width: 260,
  background: "$backgroundSecondary",
  padding: "20px 15px",
  overflowWrap: "break-word",
  position: "relative",
  borderRight: "2px $borderColor solid",
});
