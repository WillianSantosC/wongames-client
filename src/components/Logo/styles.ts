import { styled } from "../../../styled-system/jsx";

export const Wrapper = styled("div", {
  variants: {
    color: {
      white: {
        color: "token(extend.colors.white)",
      },
      black: {
        color: "token(extend.colors.black)",
      },
    },
    size: {
      normal: {
        width: "11rem",
        height: "3.3rem",
      },
      large: {
        width: "20rem",
        height: "5.9rem",
      },
    },
    hideOnMobile: {
      true: {
        width: { base: "5.8rem" },
        height: { base: "4.5rem" },
      },
    },
  },
});

export const Svg = styled("svg", {
  variants: {
    hideOnMobile: {
      true: {
        height: { base: "4.5rem" },
        pointerEvents: { base: "none" },
      },
    },
  },
});

export const Path = styled("path", {
  variants: {
    hideOnMobile: {
      true: {
        display: { base: "none", mdToXl: "" },
      },
    },
  },
});
