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
  base: {},
  variants: {
    isOpen: {
      true: {
        zIndex: { _mdMX: "token(layers.modal)" },
        position: { _mdMX: "fixed" },
        width: { _mdMX: "100%" },
        height: { _mdMX: "100vh" },
        display: { _mdMX: "flex" },
        flexDirection: { _mdMX: "column" },
        top: { _mdMX: "0" },
        left: { _mdMX: "0" },
        "& .Overlay": {
          zIndex: { _mdMX: "token(layers.modal)" },
          backgroundColor: { _mdMX: "#fff" },
          top: { _mdMX: "0" },
          left: { _mdMX: "0" },
          position: { _mdMX: "fixed" },
          width: { _mdMX: "100%" },
          height: { _mdMX: "100vh" },
          opacity: { _mdMX: "1" },
        },
        "& .Content": {
          marginTop: { _mdMX: "token(spacings.medium)" },
          transform: { _mdMX: "translateY(0)" },
          overflowY: { _mdMX: "scroll" },
        },
        "& .Content, .Footer, .IconWrapper": {
          zIndex: { _mdMX: "token(layers.modal)" },
        },
        "& .HeadingWrapper": {
          color: { _mdMX: "token(colors.black)" },
          fontSize: { _mdMX: "token(font.sizes.xlarge)" },
          fontWeight: { _mdMX: "token(font.normal)" },
          marginBottom: { _mdMX: "token(spacings.small)" },
        },
        "& .RadioLabel, .CheckBoxLabel": {
          color: { _mdMX: "token(colors.black)" },
        },
        "& .IconWrapper": {
          color: { _mdMX: "token(colors.black)" },
          "& > svg": {
            position: { _mdMX: "absolute" },
            width: { _mdMX: "30px" },
            right: { _mdMX: "0.8rem" },
            top: { _mdMX: "0.8rem" },
            _first: {
              display: { _mdMX: "none" },
            },
          },
        },
      },
      false: {
        "& .IconWrapper": {
          color: { _mdMX: "token(colors.white)" },
          "& > svg:last-child": {
            display: { _mdMX: "none" },
          },
        },
        "& .Content": {
          transform: { _mdMX: "translateY(3rem)" },
          height: { _mdMX: "0" },
        },
        "& .Content, .Footer": {
          visibility: { _mdMX: "hidden" },
          position: { _mdMX: "absolute" },
          left: { _mdMX: "0" },
        },
        "& .HeadingWrapper": {
          marginBottom: { _mdMI: "token(spacings.small)" },
        },
      },
    },
  },
});
