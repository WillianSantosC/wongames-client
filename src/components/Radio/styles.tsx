import { styled } from "@/panda/jsx";

export const Wrapper = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
  },
});

export const Label = styled("label", {
  base: {
    cursor: "pointer",
    paddingLeft: "token(spacings.xxsmall)",
    lineHeight: "1rem",
    fontSize: "token(spacings.small)",
  },
  variants: {
    labelColor: {
      white: {
        color: "token(colors.white)",
      },
      black: {
        color: "token(colors.black)",
      },
    },
  },
});

export const Input = styled("input", {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    appearance: "none",
    width: "1.8rem",
    height: "1.8rem",
    border: "0.2rem solid token(colors.primary)",
    borderRadius: "50%",
    background: "transparent",
    transition: "background token(transition.fast)",
    outline: "none",
    cursor: "pointer",

    _focus: {
      boxShadow: "0 0 0.5rem token(colors.primary)",
    },

    _before: {
      content: "''",
      width: "0.8rem",
      height: "0.8rem",
      borderRadius: "50%",
      background: "token(colors.primary)",
      transition: "opacity token(transition.fast)",
      opacity: "0",
      position: "absolute",
    },

    _checked: {
      _before: {
        opacity: "1",
      },
    },
  },
});
