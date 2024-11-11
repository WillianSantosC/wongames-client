import { styled } from "@/panda/jsx";

export const Divider = styled("hr", {
  base: {
    margin: {
      base: "token(spacings.xxlarge) auto token(spacings.medium)",
      _mdMI: "calc(token(spacings.xxlarge) * 2.5) auto token(spacings.xxlarge)",
    },
    height: "0.1rem",
    background: "rgba(181, 181, 181, 0.3)",
    border: "0",
  },
});
