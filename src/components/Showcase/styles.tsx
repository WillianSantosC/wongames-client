import { styled } from "@/panda/jsx";

export const Wrapper = styled("section", {
  base: {
    maxWidth: "token(grid.container)",
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "calc(token(grid.gutter) / 2)",
    paddingRight: "calc(token(grid.gutter) / 2)",

    "& .HeadingWrapper,.HighlightWrapper, .GameCardSliderWrapper": {
      marginBottom: "token(spacings.medium)",
    },

    "& .HighlightWrapper": {
      marginRight: "calc(-token(grid.gutter) / 2)",
      marginLeft: "calc(-token(grid.gutter) / 2)",
    },

    "& .GameCardSliderWrapper": {
      marginRight: "calc(-token(grid.gutter) / 2)",
    },

    marginBottom: "calc(token(spacings.large) * 2)",
  },
});
