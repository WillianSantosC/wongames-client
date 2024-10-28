import { styled } from "@/panda/jsx";

export const Wrapper = styled("div", {
  variants: {
    color: {
      white: {
        color: "token(colors.white)",
      },
      black: {
        color: "token(colors.black)",
      },
    },
    size: {
      normal: {
        width: "11rem",
        height: "3.3rem",
      },
      large: {
        width: "20rem",
        height: "5.9rem",
      },
    },
    hideOnMobile: {
      true: {
        width: { base: "11rem", _mdMX: "5.8rem" },
        height: { base: "3.3rem", _mdMX: "4.5rem" },

        "& svg": {
          height: { _mdMX: "4.5rem" },
          pointerEvents: { _mdMX: "none" },
        },

        "& .Text": {
          display: { _mdMX: "none" },
        },
      },
    },
  },
});
