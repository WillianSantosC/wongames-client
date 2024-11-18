import { styled } from "@/panda/jsx";

export const Nav = styled("nav", {
  base: {
    display: "flex",
    borderBottom: "0.1rem solid token(colors.lightGray)",
    flexDirection: "column",
    border: "0",
    backgroundColor: "token(colors.white)",

    "& a:not(:last-child)": {
      borderBottom: "0.1rem solid token(colors.lightGray)",
    },
  },
});

export const Link = styled("a", {
  base: {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    padding: "token(spacings.xsmall) token(spacings.small)",
    transition: "background, color, token(transition.default)",
    justifyContent: { _mdMX: "center" },
    flex: { _mdMX: "1" },

    _hover: {
      background: "token(colors.primary)",
      color: "token(colors.white)",
    },

    "& > span": {
      marginLeft: "token(spacings.xsmall)",
      display: { _mdMX: "none" },
    },
  },
  variants: {
    isActive: {
      true: {
        background: "token(colors.primary)",
        color: "token(colors.white)",
      },
      false: {
        background: "token(colors.white)",
        color: "token(colors.black)",
      },
    },
  },
});
