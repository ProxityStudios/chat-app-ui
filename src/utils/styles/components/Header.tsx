import { styled } from "../../../stitches.config";

export const HeaderStyle = styled("header", {
  height: 60,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 $horizontalBase",
  borderBottom: "1px $borderColor solid",
});

export const Logo = styled("h3", {});
