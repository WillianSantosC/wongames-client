import { styled } from "../../../styled-system/jsx";

export const Wrapper = styled("div", {
  base: {
    position: "absolute",
    top: "token(spacings.xsmall)",
    display: "flex",
    alignItems: "center",
    fontWeight: "token(font.bold)",
    color: "token(colors.white)",

    _before: {
      content: "''",
      position: "absolute",
      right: "0",
      borderStyle: "solid",
      borderLeftWidth: "0rem",
      borderRightColor: "transparent",
      borderBottomColor: "transparent",
      borderBottomWidth: "1rem",
    },
  },
  variants: {
    color: {
      primary: {
        backgroundColor: "token(colors.primary)",

        _before: {
          borderLeftColor: "#db0e89",
          borderTopColor: "#db0e89",
        },
      },
      secondary: {
        backgroundColor: "token(colors.secondary)",

        _before: {
          borderLeftColor: "#28b1a1",
          borderTopColor: "#28b1a1",
        },
      },
    },
    size: {
      normal: {
        fontSize: "token(font.sizes.small)",
        height: "3.6rem",
        padding: "0 token(spacings.small)",
        right: "-2rem",

        _before: {
          top: "3.6rem",
          borderTopWidth: "1rem",
          borderRightWidth: "2rem",
        },
      },
      small: {
        fontSize: "token(font.sizes.xsmall)",
        height: "2.6rem",
        padding: "0 token(spacings.xsmall)",
        right: "-1.5rem",

        _before: {
          top: "2.6rem",
          borderTopWidth: "0.7rem",
          borderRightWidth: "1.5rem",
        },
      },
    },
  },
});
