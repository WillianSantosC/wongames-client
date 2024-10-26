import { styled } from "../../../styled-system/jsx";

export const Wrapper = styled("main", {
  base: {
    position: "relative",
    boxSizing: { _mdMI: "0 0.4rem 0.5rem 0 rgba(0, 0, 0, 0.2)" },
  },
});

export const Image = styled("img", {
  base: {
    width: "100%",
    height: { base: "23rem", _mdMI: "58rem" },
    backgroundColor: "token(colors.lightGray)",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  },
});

export const Caption = styled("div", {
  base: {
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: { base: "token(spacings.small)", _mdMI: "token(spacings.large)" },
    borderRadius: { _mdMI: "0 0 token(border.radius) token(border.radius)" },
    position: { _mdMI: "absolute" },
    bottom: { _mdMI: "0" },
    left: { _mdMI: "0" },
  },
});

export const Title = styled("h2", {
  base: {
    fontSize: {
      base: "token(font.sizes.large)",
      _mdMI: "token(font.sizes.xxlarge)",
    },
    fontWeight: "token(font.bold)",
    color: "token(colors.white)",
  },
});

export const Subtitle = styled("h3", {
  base: {
    color: "token(colors.white)",
    fontSize: {
      base: "token(font.sizes.small)",
      _mdMI: "token(font.sizes.large)",
    },
    fontWeight: "token(font.normal)",
    marginBottom: "token(spacings.xsmall)",

    "& strong": {
      color: "token(colors.primary)",
      fontWeight: "token(font.bold)",
    },
  },
});
