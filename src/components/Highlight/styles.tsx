import { styled } from "@/panda/jsx";

export const Wrapper = styled("main", {
  base: {
    position: "relative",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    height: { base: "23rem", _mdMI: "32rem" },
    display: "grid",

    _after: {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
  },
  variants: {
    alignment: {
      right: {
        gridTemplateAreas: "'floatimage content'",
        gridTemplateColumns: "1.3fr 2fr",

        "& .Content": {
          textAlign: "right",
        },
      },
      left: {
        gridTemplateAreas: "'content floatimage'",
        gridTemplateColumns: "2fr 1.3fr",

        "& .Content": {
          textAlign: "left",
        },

        "& .FloatImage": {
          justifySelf: "end",
        },
      },
    },
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

export const SubTitle = styled("h3", {
  base: {
    fontSize: {
      base: "token(font.sizes.small)",
      _mdMI: "token(font.sizes.large)",
    },
    fontWeight: "token(font.light)",
    color: "token(colors.white)",
    marginBottom: "token(spacings.medium)",
  },
});

export const Content = styled("div", {
  base: {
    gridArea: "content",
    zIndex: "token(layers.base)",
    padding: { base: "token(spacings.xsmall)", _mdMI: "token(spacings.large)" },
    alignSelf: { _mdMI: "end" },
  },
});

export const FloatImage = styled("img", {
  base: {
    gridArea: "floatimage",
    zIndex: "token(layers.base)",
    maxHeight: { base: "23rem", _mdMI: "32rem" },
    maxWidth: "100%",
    alignSelf: "end",
  },
});
