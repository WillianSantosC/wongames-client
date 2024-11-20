import { styled } from "@/panda/jsx";

export const Main = styled("main", {
  base: {
    marginTop: "token(spacings.medium)",
    display: { _mdMI: "grid" },
    gridTemplateColumns: { _mdMI: "32rem 1fr" },
    gap: { _mdMI: "calc(token(grid.gutter) * 2)" },
  },
});

export const Content = styled("div", {
  base: {
    width: "100%",
    backgroundColor: "token(colors.white)",
    color: "token(colors.black)",
    padding: "token(spacings.xsmall)",
  },
});
