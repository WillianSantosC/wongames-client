import { styled } from "@/panda/jsx";

export const Wrapper = styled("div", {
  base: {
    "& .GameItemWrapper": {
      _last: {
        borderBottom: "0",
      },
    },
  },
});
