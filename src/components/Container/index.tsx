import { styled } from "@/panda/jsx";

const Container = styled("div", {
  base: {
    maxWidth: "token(grid.container)",
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "calc(token(grid.gutter) / 2)",
    paddingRight: "calc(token(grid.gutter) / 2)",
  },
});

export default Container;
