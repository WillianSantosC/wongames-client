import { styled } from "../../../styled-system/jsx";

export const Wrapper = styled("a", {
  base: {
    background: "linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%)",
    color: "token(colors.white)",
    border: "0",
    borderRadius: "token(border.radius)",
    padding: "token(spacings.xxsmall)",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    _hover: {
      background: "linear-gradient(180deg, #e35565 0%, #d958a6 50%)",
    },
  },
  variants: {
    size: {
      small: {
        height: "3rem",
        fontSize: "token(font.sizes.xsmall)",
      },
      medium: {
        height: "4rem",
        fontSize: "token(font.sizes.small)",
        padding: "token(spacings.xxsmall) token(spacings.medium)",
      },
      large: {
        height: "5rem",
        fontSize: "token(font.sizes.medium)",
        padding: "token(spacings.xxsmall) token(spacings.xlarge)",
      },
    },
    fullWidth: {
      true: {
        width: "100%",
      },
    },
    hasIcon: {
      true: {
        "& > svg": {
          transform: "scale(1.3)",

          "& + span": {
            marginLeft: "token(spacings.xxsmall)",
          },
        },
      },
    },
  },
});
