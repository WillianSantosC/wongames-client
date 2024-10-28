import { styled } from "@/panda/jsx";

export const Wrapper = styled("menu", {
  base: {
    display: "flex",
    alignItems: "center",
    padding: "token(spacings.small) 0",
    position: "relative",
  },
});

export const IconWrapper = styled("div", {
  base: {
    color: "token(colors.white)",
    "& > svg": {
      transform: "scale(1.8)",
      cursor: "pointer",
      _last: {
        marginRight: "0.5rem",
      },
    },
    _first: {
      marginLeft: "0.5rem",
    },
  },
});

export const LogoWrapper = styled("div", {
  base: {
    position: { _mdMX: "absolute" },
    left: { _mdMX: "50%" },
    transform: { _mdMX: "translateX(-50%)" },
  },
});

export const MenuGroup = styled("div", {
  base: {
    display: "flex",
    flexGrow: "1",
    justifyContent: "flex-end",
    alignItems: "center",

    "& > div": {
      marginLeft: "token(spacings.xsmall)",
    },
  },
});

export const MenuNav = styled("div", {
  base: {
    marginLeft: { _mdMX: "token(spacings.small)" },
  },
});

export const MenuLink = styled("a", {
  base: {
    position: "relative",
    color: "token(colors.white)",
    fontSize: "token(font.sizes.medium)",
    margin: "0.3rem token(spacings.small) 0",
    textDecoration: "none",
    textAlign: "center",

    _hover: {
      _after: {
        content: "''",
        position: "absolute",
        display: "block",
        height: "0.3rem",
        background: "token(colors.primary)",
        animation: "hoverAnimation 0.2s forwards",
      },
    },
  },
});

export const MenuFull = styled("nav", {
  base: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    background: "token(colors.white)",
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    height: "100vh",
    overflow: "hidden",
    transition: "opacity 0.3s ease-in-out",

    "& > svg": {
      cursor: "pointer",
      position: "absolute",
      top: "0",
      right: "0",
      margin: "token(spacings.xsmall)",
      width: "2.4rem",
      height: "2.4rem",
    },

    "& .MenuNav": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "1",
      flexDirection: "column",
    },

    "& .MenuLink": {
      color: "token(colors.black)",
      fontWeight: "token(font.bold)",
      fontSize: "token(font.sizes.xlarge)",
      marginBottom: "token(spacings.small)",
    },
  },
  variants: {
    isOpen: {
      true: {
        opacity: "1",
        pointerEvents: "all",

        "& .MenuLink": {
          transition: "transform 0.3s ease-in-out",
          transform: "translateY(0)",
        },

        "& .RegisterBox": {
          transform: "translateY(0)",
          transition: "transform 0.3s ease-in-out",
        },
      },
      false: {
        opacity: "0",
        pointerEvents: "none",

        "& .MenuLink": {
          transition: "transform 0.3s ease-in-out",
          transform: "translateY(3rem)",
        },

        "& .RegisterBox": {
          transform: "translateY(3rem)",
          transition: "transform 0.3s ease-in-out",
        },
      },
    },
  },
});

export const RegisterBox = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 token(spacings.xlarge) token(spacings.xlarge)",

    "& > span": {
      display: "block",
      margin: "token(spacings.xxsmall) 0",
      fontSize: "token(font.sizes.xsmall)",
    },
  },
});

export const CreateAccount = styled("a", {
  base: {
    textDecoration: "none",
    color: "token(colors.primary)",
    borderBottom: "0.2rem solid token(colors.primary)",
  },
});
