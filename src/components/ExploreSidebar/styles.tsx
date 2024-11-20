import { styled } from "@/panda/jsx";
import { token } from "@/panda/tokens";
import { rgba } from "polished";

export const IconWrapper = styled("div", {
  base: {
    cursor: "pointer",
    width: "2.4rem",
    height: "2.4rem",
    display: { _mdMI: "none" },
  },
});

export const Content = styled("div", {
  base: {
    flex: "1",
    transition: "transform token(transition.default)",
    overflowY: { base: "auto", _mdMI: "initial" },
    padding: { base: "0 token(spacings.small)", _mdMI: "0" },
    marginTop: { base: "5.6rem", _mdMI: "0" },
    marginBottom: { base: "2rem", _mdMI: "0" },
  },
});

export const Overlay = styled("div", {
  base: {
    transition: "opacity token(transition.default)",
    opacity: "0",
    position: "absolute",
  },
});

export const Items = styled("div", {
  base: {
    "& > div:not(:last-of-type)": {
      marginBottom: "token(spacings.xsmall)",
    },

    "& + div": {
      borderTop: `0.1rem solid ${rgba(token("colors.gray"), 0.2)}`,
      marginTop: "token(spacings.small)",
      paddingTop: "token(spacings.xsmall)",
    },
  },
});

export const Footer = styled("div", {
  base: {
    boxShadow: `0 -0.2rem 0.4rem ${rgba(token("colors.black"), 0.2)}`,
    padding: "token(spacings.small)",
  },
});

export const Wrapper = styled("div", {
  base: { display: "flex" },
  variants: {
    isOpen: {
      true: {
        zIndex: "token(layers.modal)",
        position: "fixed",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        top: "0",
        left: "0",

        "& .Overlay": {
          zIndex: "token(layers.modal)",
          backgroundColor: "#fff",
          top: "0",
          left: "0",
          position: "fixed",
          width: "100%",
          height: "100vh",
          opacity: "1",
        },

        "& .Content": {
          marginTop: "token(spacings.medium)",
          transform: "translateY(0)",
          overflowY: "scroll",
        },

        "& .Content, .Footer, .IconWrapper": {
          zIndex: "token(layers.modal)",
        },

        "& .HeadingWrapper": {
          color: "token(colors.black)",
          fontSize: "token(font.sizes.xlarge)",
          fontWeight: "token(font.normal)",
          marginBottom: "token(spacings.small)",
        },

        "& .RadioLabel, .CheckBoxLabel": {
          color: "token(colors.black)",
        },

        "& .IconWrapper": {
          color: "token(colors.black)",

          "& > svg": {
            position: "absolute",
            width: "30px",
            right: "0.8rem",
            top: "0.8rem",
            _first: {
              display: "none",
            },
          },
        },
      },
      false: {
        "& .IconWrapper": {
          color: "token(colors.white)",
          "& > svg:last-child": {
            display: "none",
          },
        },

        "& .Content": {
          transform: "translateY(3rem)",
          height: "0",
        },

        "& .Content, .Footer": {
          visibility: "hidden",
          position: "absolute",
          left: "0",
        },
      },
    },
  },
});
