import { styled } from "@/panda/jsx";

export const Wrapper = styled("main", {
  base: {
    color: { base: "token(colors.white)", _mdMI: "token(colors.black)" },
    background: { _mdMI: "token(colors.white)" },
    padding: { _mdMI: "token(spacings.medium)" },

    "& h1, h2, h3, h4, h5, h6": {
      color: { base: "token(colors.white)", _mdMI: "token(colors.black)" },
      margin: "token(spacings.xsmall) 0",
      borderLeft: "0.7rem solid token(colors.secondary)",
      paddingLeft: "token(spacings.xxsmall)",
    },

    "& p": {
      marginBottom: "token(spacings.xsmall)",
    },

    "& a": {
      color: "token(colors.primary)",
    },

    "& img": {
      maxWidth: "min(70rem, 100%)",
      marginBottom: "token(spacings.xsmall)",
    },

    "& ul, ol": {
      padding: "token(spacings.xsmall) token(spacings.small)",
    },

    "& hr": {
      margin: "token(spacings.small) 0",
    },
  },
});
