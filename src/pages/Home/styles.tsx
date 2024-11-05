import { styled } from "@/panda/jsx";

export const SectionBanner = styled("section", {
  base: {
    margin: {
      base: "token(spacings.large) calc(-token(grid.gutter) / 2)",
      _mdMI: "token(spacings.large) 0",
    },
    position: { _mdMI: "relative" },
    zIndex: { _mdMI: "token(layers.base)" },
  },
});

export const SectionNews = styled("div", {
  base: {
    marginBottom: { base: "calc(token(spacings.xxlarge) * 2)", _mdMI: "0" },
    marginTop: { _lgMI: "-13rem" },
    paddingTop: { _mdMI: "14rem" },
    paddingBottom: { _mdMI: "10rem" },
    backgroundColor: { _mdMI: "token(colors.lightBg)" },
    clipPath: { _mdMI: "polygon(0 0, 100% 15%, 100% 100%, 0 85%)" },

    "& .HeadingWrapper": {
      color: "token(colors.black)",
    },
  },
});

export const SectionUpcoming = styled("div", {
  base: {
    "& .HighlightWrapper": {
      marginTop: "calc(token(spacings.xlarge) * 2)",
    },
  },
});

export const SectionFooter = styled("section", {
  base: {
    marginTop: "token(spacings.large)",
    paddingBottom: "token(spacings.xsmall)",
    backgroundColor: "token(colors.white)",
    paddingTop: {
      base: "token(spacings.xxlarge)",
      _mdMI: "calc(token(spacings.xxlarge) * 2)",
    },
    clipPath: {
      base: "polygon(0 5%, 100% 0%, 100% 100%, 0 100%)",
      _mdMI: "polygon(0 15%, 100% 0%, 100% 100%, 0 100%)",
    },
  },
});
