import { styled } from "@/panda/jsx";

export const Form = styled("form", {
  base: {
    maxWidth: "100%",
    display: "grid",
    gap: { base: "token(spacings.xsmall)", _mdMI: "token(spacings.medium)" },
    gridTemplateColumns: { _mdMI: "1fr 1fr" },
    marginTop: "token(spacings.xsmall)",

    "& > button": {
      marginTop: { base: "token(spacings.xxlarge)", _mdMI: "0" },
      gridColumn: { _mdMI: "2" },
      justifySelf: { _mdMI: "end" },
    },
  },
});
