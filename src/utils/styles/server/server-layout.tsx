import { styled } from "../../../../stitches.config";

export const ServerLayoutStyle = styled("div", {
  display: "grid",
  gridTemplateAreas: `
  "sidebar-view main-view"
  "servers-view servers-view"
      `,
  gridTemplateColumns: "auto 1fr",
  gridTemplateRows: "auto 1fr auto",
  height: "100%",
  minHeight: "100%",
  width: "100%",
  position: "relative",
});

export const ServerMain = styled("main", {
  gridArea: "main-view",
  overflow: "auto",
});
