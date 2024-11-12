import { styled } from "@/panda/jsx";

export const Content = styled("div", {
  base: {
    display: "grid",
    gridTemplateColumns: { base: "1fr", _mdMI: "2fr 1fr" },
    gridGap: "token(spacings.large)",
    margin: "token(spacings.large) 0",
  },
});
