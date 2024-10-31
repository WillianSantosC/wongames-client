import { defineGlobalStyles } from "@pandacss/dev";

const globalCss = defineGlobalStyles({
  "*": {
    margin: "0",
    padding: "0",
    boxSizing: "border-box",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",

    "&::before, &::after": {
      boxSizing: "inherit",
    },
  },

  html: {
    fontSize: "62.5%",
  },

  button: {
    cursor: "pointer",
    "&:active": {
      transform: "translateY(1px)",
      textShadow: "-1px -1px 0px #777, -1px -1px 0px #777",
      boxShadow: "inset 1px 1px 4px #222",
    },
  },

  "html, body": {
    height: "100%",
  },

  body: {
    fontFamily:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    backgroundColor: "token(colors.mainBg)",
  },

  // ScrollBar Style
  "::-webkit-scrollbar": {
    width: "7px",
    height: "7px",
  },

  "::-webkit-scrollbar-button": {
    width: "0px",
    height: "0px",
  },

  "::-webkit-scrollbar-thumb": {
    background: "#f231a5",
    border: "0px none #d21414",
    borderRadius: "6px",
  },

  "::-webkit-scrollbar-thumb:hover": {
    background: "#f231a5",
  },

  "::-webkit-scrollbar-thumb:active": {
    background: "#f231a5",
  },

  "::-webkit-scrollbar-track": {
    background: "#666666",
    border: "9px solid #06092b",
    borderRadius: "53px",
  },

  "::-webkit-scrollbar-track:hover": {
    background: "#666666",
  },

  "::-webkit-scrollbar-track:active": {
    background: "#f231a5",
  },

  "::-webkit-scrollbar-corner": {
    background: "transparent",
  },
});

export default globalCss;
