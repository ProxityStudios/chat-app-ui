import Image from "next/image";
import { styled } from "../../../../stitches.config";

export const AvatarContainerStyle = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "100%",
  background: "$background",
  overflow: "hidden",
  cursor: "pointer",
  flexShrink: 0,
  height: "max-content",
  width: "max-content",
});
export const AvatarStyle = styled(Image, {
    borderRadius: "100%",
});
