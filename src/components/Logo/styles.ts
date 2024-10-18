import { styled } from "../../../styled-system/jsx";

export const Wrapper = styled("div", {
  base: {
    "@media (max-width: token(breakpoint.md))": {
      width: "5.8rem",
      height: "4.5rem",
    },
  },
  variants: {
    color: {
      white: {
        color: "token(colors.white)",
      },
      black: {
        color: "token(colors.black)",
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
    // hideOnMobile: {
    //   true: {
    //     width: { base: "5.8rem" },
    //     height: { base: "4.5rem" },
    //   },
    // },
  },
});

export const Svg = styled("svg", {
  base: {
    "@media (max-width: token(breakpoint.md))": {
      height: "4.5rem",
      pointerEvents: "none",
    },
  },
  // variants: {
  //   hideOnMobile: {
  //     true: {
  //       height: { base: "4.5rem" },
  //       pointerEvents: { base: "none" },
  //     },
  //   },
  // },
});

export const Path = styled("path", {
  base: {
    "@media (max-width: token(breakpoint.md))": {
      display: "none",
    },
  },
  // variants: {
  //   hideOnMobile: {
  //     true: {
  //       display: { base: "none", mdToXl: "" },
  //     },
  //   },
  // },
});
