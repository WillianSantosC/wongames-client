import { styled } from "@/panda/jsx";

export const Wrapper = styled("footer", {
  base: {
    "& .HeadingWrapper": {
      textTransform: "uppercase",
      marginBottom: "token(spacings.xxsmall)",
    },
  },
});

export const Content = styled("div", {
  base: {
    display: "grid",
    gridTemplateColumns: { base: "repeat(2, 1fr)", _mdMI: "repeat(4, 1fr)" },
    gap: "token(grid.gutter)",
    marginTop: "token(spacings.medium)",
  },
});

export const Column = styled("div", {
  base: {
    "& a,span": {
      display: "block",
      color: "token(colors.gray)",
      textDecoration: "none",
      marginBottom: "token(spacings.xxsmall)",
      fontSize: "token(font.sizes.small)",
    },

    "& a:hover": {
      textDecoration: "underline",
    },
  },
});

export const Copyright = styled("div", {
  base: {
    color: "token(colors.gray)",
    fontSize: "token(font.sizes.xsmall)",
    marginTop: "token(spacings.large)",
    marginBottom: "token(spacings.medium)",
    textAlign: "center",
  },
});
