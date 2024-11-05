import { styled } from "@/panda/jsx";

export const Wrapper = styled("div", {
  base: {
    "& slick-arrow.slick-prev, slick-arrow.slick-next": {
      display: "block",
      color: "token(colors.white)",
      cursor: "pointer",
      position: "absolute",
      top: "50%",
      width: "2.5rem",
      height: "2.5rem",
      padding: "0",
      transform: "translate(0, -50%)",
    },

    "& slick-arrow.slick-prev": {
      left: "- token(spacings.xxlarge)",
    },

    "& slick-arrow.slick-next": {
      right: "- token(spacings.xxlarge)",
    },

    "& .slick-prev.slick-disabled, .slick-next.slick-disabled": {
      visibility: "hidden",
    },

    "& .slick-slide > div": {
      margin: "0 token(spacings.xsmall)",
      cursor: "pointer",
    },

    "& .slick-list": {
      margin: "0 - token(spacings.xsmall)",
    },

    overflowX: { _lgMX: "hidden" },
  },
});

export const Modal = styled("div", {
  base: {
    position: "fixed",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    background: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "token(layers.modal)",
    transition: "opacity token(transition.default)",
  },
  variants: {
    isOpen: {
      true: {
        opacity: "1",
      },
      false: {
        opacity: "0",
        pointerEvents: "none",
      },
    },
  },
});

export const Close = styled("div", {
  base: {
    color: "token(colors.white)",
    position: "absolute",
    left: "0",
    top: "0",
    cursor: "pointer",
    width: "100%",
    height: "100%",
    textAlign: "right",
  },
});

export const Content = styled("div", {
  base: {
    maxWidth: "min(120rem, 100%)",
    maxHeight: "80rem",
  },
});
