import { styled } from "@/panda/jsx";

export const Wrapper = styled("section", {
  base: {
    overflowX: { _xlMX: "hidden" },

    "& .slick-track, .slick-list": {
      display: "flex !important",
    },

    "& .slick-slide > div": {
      margin: {
        base: "0 token(spacings.xxsmall) !important",
        _lgMI: "0 token(spacings.xsmall) !important",
      },
      flex: "1 0 auto !important",
      height: "100% !important",
    },

    "& .slick-list": {
      margin: {
        base: "0 - token(spacings.xxsmall) !important",
        _lgMI: "0 - token(spacings.xsmall) !important",
      },
    },

    "& .slick-prev,.slick-next": {
      display: "block !important",
      cursor: "pointer !important",
      position: "absolute !important",
      top: "50% !important",
      width: "2.5rem !important",
      height: "2.5rem !important",
      padding: "0 !important",
      transform: "translate(0, -50%) !important",
    },

    "& .slick-prev": {
      left: "- token(spacings.xxlarge) !important",
    },

    "& .slick-next": {
      right: "- token(spacings.xxlarge) !important",
    },

    "& .slick-prev.slick-disabled, .slick-next.slick-disabled": {
      visibility: "hidden !important",
    },
  },
  variants: {
    color: {
      white: {
        "& .slick-prev,.slick-next": {
          color: "token(colors.white) !important",
        },
      },
      black: {
        "& .slick-prev,.slick-next": {
          color: "token(colors.black) !important",
        },
      },
    },
  },
});
