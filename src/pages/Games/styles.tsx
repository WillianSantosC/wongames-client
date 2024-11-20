import { styled } from "@/panda/jsx";
import Container from "@/components/Container";

export const Main = styled(Container, {
  base: {
    display: { _mdMI: "grid" },
    gridTemplateColumns: { _mdMI: "26rem 1fr" },
    gap: { _mdMI: "token(grid.gutter)" },
  },
});

export const ShowMore = styled("div", {
  base: {
    color: "token(colors.white)",
    textAlign: "center",
    padding: "token(spacings.medium)",
    textTransform: "uppercase",
    fontWeight: "bold",
    cursor: "pointer",

    "& > svg": {
      color: "token(colors.primary)",
    },
  },
});
