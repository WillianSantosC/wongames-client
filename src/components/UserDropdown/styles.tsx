import { styled } from "@/panda/jsx";

export const Nav = styled("nav", {
  base: {
    display: "flex",
    flexDirection: "column",
    width: "26rem",

    "& a:not(:last-child)": {
      borderBottom: "0.1rem solid token(colors.lightGray)",
    },
  },
});

export const Username = styled("span", {
  base: {
    padding: "0 token(spacings.xxsmall)",
  },
});

export const Link = styled("a", {
  base: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    background: "token(colors.white)",
    color: "token(colors.black)",
    padding: "token(spacings.xsmall) token(spacings.small)",
    transition: "background, color, token(transition.default)",

    _hover: {
      background: "token(colors.primary)",
      color: "token(colors.white)",
    },

    "& > svg": {
      width: "2.4rem",
      height: "2.4rem",
    },

    "& > span": {
      marginLeft: "token(spacings.xsmall)",
    },
  },
});
