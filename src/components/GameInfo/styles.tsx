import { styled } from "@/panda/jsx";

export const Wrapper = styled("div", {
  base: {
    position: "relative",
    background: "token(colors.white)",
    padding: "token(spacings.small)",

    "& .RibbonWrapper": {
      right: { base: "-1rem", _mdMI: "token(spacings.small)" },
      top: "token(spacings.small)",
      fontSize: "token(font.sizes.large)",

      _before: {
        borderRightWidth: "1rem",
        border: { _mdMI: "none" },
      },
    },
  },
});

export const Description = styled("p", {
  base: {
    fontSize: "token(font.sizes.small)",
    color: "token(colors.gray)",
    marginBottom: "token(spacings.small)",
    marginTop: "1rem",

    maxWidth: { _mdMI: "77rem" },
  },
});

export const ButtonsWrapper = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    flexDirection: { base: "column", _mdMI: "row-reverse" },

    "& > button": {
      width: { base: "100%", _mdMI: "initial" },
      marginBottom: { base: "token(spacings.xxsmall)", _mdMI: "0" },
    },
  },
});
