import { styled } from "@/panda/jsx";

export const Card = styled("div", {
  base: {
    "& .HeadingWrapper": {
      marginBottom: "token(spacings.xsmall)",
    },

    background: "token(colors.lightGray)",
    color: "token(colors.black)",
    padding: "1.3rem token(spacings.xsmall)",
    display: "flex",
    alignItems: "center",

    "&:not(:last-child)": {
      marginBottom: "token(spacings.xsmall)",
    },

    "& > span": {
      marginLeft: "token(spacings.xxsmall)",
    },
  },
});
