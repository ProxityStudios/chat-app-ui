import { styled } from "../../../../stitches.config";

export const ServerServersBarStyle = styled("footer", {
  gridArea: "servers-view",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "8px 20px",
  background: "$backgroundSecondary",
  borderTop: "1px $borderColor solid",
  position: "relative",
  height: 80,
});

export const ServerServersBarContainer = styled("div", {
  position: "absolute",
  left: "50%",
  right: "50%",
  transform: "translateX(-50%)",
  width: "max-content",
  padding: "0 4px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  background: "$background",
  borderRadius: "$xlarge",
  border: "1px $borderColor solid",
  gap: 5,
  height: 50,
});

// TODO: find name for this tho
export const Server = styled("a", {
  position: "relative",
  display: "inline-block",
  width: 40,
  height: 40,
  background: "rgba($backgroundSecondaryRgb, .7)",
  borderRadius: "$large",
  transition: "background 250ms ease-out, border-radius 150ms ease",
  cursor: "pointer",
  variants: {
    selected: {
      true: {
        background: "$backgroundSecondary",
        "&::after": {
          content: "",
          borderRadius: "$xlarge",
          position: "absolute",
          bottom: -1,
          left: "50%",
          right: "50%",
          transform: "translateX(-50%)",
          background: "$accent300",
          width: "60%",
          height: 2,
        },
      },
    },
  },
  "&:hover": {
    background: "rgba($backgroundSecondaryRgb, .9)",
  },
  "&:active": {
    borderRadius: "16px",
  },
});

export const FindNameForThis = styled("div", {
  position: "absolute",
  top: 3,
  left: "50%",
  right: "50%",
  transform: "translateX(-50%)",
  cursor: "pointer",
  backgroundColor: "$accent300",
  borderRadius: "$xlarge",
  width: 40,
  height: 3,
});
