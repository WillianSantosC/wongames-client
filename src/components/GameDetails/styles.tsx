import { styled } from "@/panda/jsx";

export const Wrapper = styled("div", {
  base: {
    margin: "token(spacings.small) 0",
  },
});

export const Content = styled("div", {
  base: {
    display: "grid",
    gap: "token(spacings.xsmall)",
    gridTemplateColumns: {
      base: "repeat(2, 1fr)",
      _mdMI: "repeat(3, 1fr)",
      _lgMI: "repeat(6, 1fr)",
    },
    marginTop: "token(spacings.small)",
  },
});

export const Block = styled("div");

export const Description = styled("p", {
  base: {
    fontSize: "token(font.sizes.medium)",
    fontWeight: "token(font.bold)",
    color: "token(colors.white)",
  },
});

export const Label = styled("h3", {
  base: {
    fontSize: "token(font.sizes.small)",
    fontWeight: "token(font.light)",
    color: "token(colors.white)",
  },
});

export const IconsWrapper = styled("div", {
  base: {
    color: "token(colors.white)",
  },
});

export const Icon = styled("span", {
  base: {
    marginRight: "token(spacings.xxsmall)",
  },
});
