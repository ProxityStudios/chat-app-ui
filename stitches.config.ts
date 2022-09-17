import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  prefix: "chat-app",
  theme: {
    sizes: {
      conversationTopBase: "120px",
    },
    space: {
      horizontalBase: "20px",
    },

    radii: {
      base: ".25rem",
      large: ".6rem",
      xlarge: ".8rem",
    },
    colors: {
      borderColor: "hsl(0, 2%, 15%)",
      dividerColor: "hsl(0, 0%, 19%)",

      background: "hsl(234, 18%, 11%)",
      backgroundSecondary: "hsl(234, 15%, 14%)",
      backgroundSecondaryRgb: "28, 29, 38",

      inputBackground: "hsl(230, 20%, 8%)",
      inputFocusBackground: "hsl(230, 20%, 16%)",

      accent100: "hsl(198, 66%, 92%)",
      accent200: "hsl(198, 66%, 82%)",
      accent300: "hsl(198, 66%, 74%)",
      accent400: "hsl(198, 66%, 69%)",
      accent500: "hsl(198, 66%, 65%)",
      accent600: "hsl(198, 66%, 47%)",
      accent700: "hsl(198, 66%, 38%)",
      accent800: "hsl(198, 66%, 29%)",
      accent900: "hsl(198, 66%, 25%)",

      yellow100: "hsl(52, 96%, 92%)",
      yellow200: "hsl(52, 96%, 88%)",
      yellow300: "hsl(52, 96%, 79%)",
      yellow400: "hsl(52, 96%, 71%)",
      yellow500: "hsl(52, 96%, 69%)",
      yellow600: "hsl(52, 96%, 54%)",
      yellow700: "hsl(52, 96%, 43%)",
      yellow800: "hsl(52, 96%, 32%)",
      yellow900: "hsl(52, 96%, 26%)",

      // TODO: add nesciaind
      green500: "hsl(142, 70%, 49%)",

      red100: "hsl(352, 93%, 92%)",
      red200: "hsl(352, 93%, 88%)",
      red300: "hsl(352, 93%, 79%)",
      red400: "hsl(352, 93%, 71%)",
      red500: "hsl(352, 93%, 68%)",
      red600: "hsl(352, 93%, 54%)",
      red700: "hsl(352, 93%, 43%)",
      red800: "hsl(352, 93%, 32%)",
      red900: "hsl(352, 93%, 27%)",
    },
  },
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
  },
  utils: {},
});

export const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
  },
  "html, body": {
    colorScheme: "dark",
    fontFamily:
      "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  },
  "html, body, #__next": {
    background: "$background",
    height: "100%",
    width: "100%",
    isolation: "isolate",
    zIndex: 0,
    userSelect: "none",
  },
});
