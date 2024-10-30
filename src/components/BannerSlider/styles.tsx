import { styled } from "@/panda/jsx";

export const Wrapper = styled("section", {
  base: {
    maxWidth: { _lgMI: "104rem" },
    margin: { _lgMI: "0 auto" },

    "& .slick-dots": {
      listStyle: "none",
      display: "flex !important",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "token(spacings.small)",

      position: { _lgMI: "absolute" },
      right: { _lgMI: "0" },
      flexDirection: { _lgMI: "column" },
      height: { _lgMI: "100%" },
      top: { _lgMI: "0" },
      margin: { _lgMI: "0" },

      "& li": {
        background: "token(colors.white)",
        width: "1.2rem",
        height: "1.2rem",
        borderRadius: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        margin: {
          base: "0 token(spacings.xxsmall)",
          _lgMI: "token(spacings.xxsmall) 0",
        },
      },

      "& li.slick-active": {
        background: "token(colors.primary)",
      },

      "& button": {
        opacity: "0",
        width: "1.2rem",
        height: "1.2rem",
        cursor: "pointer",
      },
    },
  },
});
