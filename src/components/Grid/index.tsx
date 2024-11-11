import { styled } from "@/panda/jsx";

export const Grid = styled("div", {
  base: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(25rem, 1fr))",
    gridGap: "token(spacings.medium)",
    margin: "token(spacings.medium) 0",
  },
});
