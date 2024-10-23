import { styled } from "../../../styled-system/jsx";

export const Wrapper = styled("h2", {
  base: {
    fontSize: {
      base: "token(font.sizes.xlarge)",
      _mdMI: "token(font.sizes.xxlarge)",
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
    lineLeft: {
      true: {
        paddingLeft: "token(spacings.xxsmall)",
        borderLeft: "0.7rem solid token(colors.secondary)",
      },
    },
    lineBottom: {
      true: {
        position: "relative",

        _after: {
          content: "''",
          position: "absolute",
          left: "0.1rem",
          bottom: "-0.8rem",
          width: "5rem",
          height: "1.2rem",
          background: "token(colors.primary)",
        },
      },
    },
  },
});
