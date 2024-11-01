import { styled } from "@/panda/jsx";
import { cva } from "@/panda/css";

export const Sections = styled(
  "section",
  cva({
    base: {
      "& .HeadingWrapper": {
        marginBottom: "token(spacings.medium)",
      },

      "& .HighlightWrapper": {
        marginBottom: "token(spacings.medium)",
        marginRight: { _mdMX: "calc(-token(grid.gutter) / 2)" },
        marginLeft: { _mdMX: "calc(-token(grid.gutter) / 2)" },
      },

      "& .GameCardSliderWrapper": {
        marginBottom: "token(spacings.medium)",
        marginRight: { _lgMX: "calc(-token(grid.gutter) / 2)" },
      },

      marginBottom: "calc(token(spacings.large) * 2)",
    },
  }),
);

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

export const SectionNews = styled(Sections, {
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

export const SectionUpcoming = styled(Sections, {
  base: {
    "& .HeadingWrapper": {
      marginTop: "calc(token(spacings.xlarge) * 2)",
    },
  },
});

export const SectionFooter = styled(Sections, {
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

export const SectionMostPopular = styled(Sections);

export const SectionFreeGames = styled(Sections);
