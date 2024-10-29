import { styled } from "@/panda/jsx";

export const Wrapper = styled("article", {
  base: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    backgroundColor: "token(colors.white)",
  },
});

export const ImageBox = styled("div", {
  base: {
    height: "14rem",
    width: "100%",
    background: "#f6f7f8",
    backgroundImage:
      "linear-gradient( to right,#f6f7f8 0%,#edeef1 20%,#f6f7f8 40%,#f6f7f8 100%)",
    backgroundSize: "80rem 14rem",
    animation: "placeholderShimmer 1s linear infinite forwards",
  },
});

export const Content = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
    height: "100%",
    margin: "token(spacings.xsmall)",
  },
});

export const Info = styled("div", {
  base: {
    maxWidth: "calc(100% - 2.5rem)",
  },
});

export const Title = styled("h3", {
  base: {
    fontSize: "token(font.sizes.medium)",
    lineHeight: "token(font.sizes.medium)",
    fontWeight: "token(font.bold)",
    color: "token(colors.black)",
  },
});

export const Developer = styled("h4", {
  base: {
    fontSize: "token(font.sizes.small)",
    fontWeight: "token(font.bold)",
    color: "token(colors.gray)",
  },
});

export const FavButton = styled("div", {
  base: {
    color: "token(colors.primary)",
    position: "absolute",
    right: "0",
    top: "-0.5rem",
    cursor: "pointer",

    "& > svg": {
      transform: "scale(1.8)",
    },
  },
});

export const BuyBox = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: "token(spacings.xxsmall)",
  },
});

export const Price = styled("div", {
  base: {
    display: "inline-flex",
    fontWeight: "token(font.bold)",
    height: "3rem",
    alignItems: "center",
  },
  variants: {
    isPromotional: {
      true: {
        color: "token(colors.gray)",
        textDecoration: "line-through",
        marginRight: "token(spacings.xsmall)",
      },
      false: {
        color: "token(colors.white)",
        padding: "0 token(spacings.xxsmall)",
        backgroundColor: "token(colors.secondary)",
        borderRadius: "token(border.radius)",
        marginRight: "calc(token(spacings.xxsmall) / 2)",
      },
    },
  },
});
