import { styled } from "@/panda/jsx";

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
