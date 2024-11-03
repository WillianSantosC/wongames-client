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
    lineHeight: "1.8rem",
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
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    appearance: "none",
    width: "1.8rem",
    height: "1.8rem",
    border: "0.2rem solid token(colors.darkGray)",
    borderRadius: "0.2rem",
    transition: "background border token(transition.fast)",
    position: "relative",
    outline: "none",

    _before: {
      content: "''",
      width: "0.6rem",
      height: "0.9rem",
      border: "0.2rem solid token(colors.white)",
      borderTop: "0",
      borderLeft: "0",
      transform: "rotate(45deg)",
      position: "absolute",
      top: "0.1rem",
      opacity: "0",
      transition: "token(transition.fast)",
    },

    _focus: {
      boxShadow: "0 0 0.5rem token(colors.primary)",
    },

    _checked: {
      borderColor: "token(colors.primary)",
      background: "token(colors.primary)",
      _before: {
        opacity: "1",
      },
    },
  },
});
