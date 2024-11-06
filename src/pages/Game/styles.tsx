import { styled } from "@/panda/jsx";

export const Cover = styled("div", {
  base: {
    position: "absolute",
    top: "0",
    right: "0",
    left: "0",
    backgroundSize: "cover",
    backgroundPosition: "top center",
    opacity: "0.4",
    height: { base: "39.5rem", _mdMI: "70rem" },
    clipPath: { _mdMI: "polygon(0 0, 100% 0, 100% 100%, 0 85%)" },
  },
});
