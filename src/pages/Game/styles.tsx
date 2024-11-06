import { styled } from "@/panda/jsx";

export const Main = styled("main", {
  base: {
    marginTop: { base: "20rem", _mdMI: "58rem" },
  },
});

export const Cover = styled("div", {
  base: {
    position: "absolute",
    top: "0",
    right: "0",
    left: "0",
    backgroundSize: "cover",
    backgroundPosition: "top center",
    opacity: "0.4",
    height: { base: "39.5rem", _mdMI: "70rem" },
    clipPath: { _mdMI: "polygon(0 0, 100% 0, 100% 100%, 0 85%)" },
  },
});

export const Section = styled("main", {
  base: {
    width: "100%",
    maxWidth: "token(grid.container)",
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "calc(token(grid.gutter) / 2)",
    paddingRight: "calc(token(grid.gutter) / 2)",

    marginBottom: {
      base: "token(spacings.xlarge)",
      _mdMI: "calc(token(spacings.xlarge) * 2)",
    },
  },
});

export const SectionGameInfo = styled(Section);
