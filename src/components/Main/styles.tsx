import { styled } from "@/panda/jsx";

export const Wrapper = styled("main", {
  base: {
    backgroundColor: "token(colors.mainBg)",
    color: "#fff",
    width: "100%",
    height: "100%",
    padding: "3rem",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const Logo = styled("img", {
  base: {
    width: "25rem",
    marginBottom: "2rem",
  },
});

export const Title = styled("h1", {
  base: {
    fontSize: "2.5rem",
  },
});

export const Description = styled("h2", {
  base: {
    fontSize: "2rem",
    fontWeight: "400",
  },
});

export const Illustration = styled("img", {
  base: {
    marginTop: "3rem",
    width: "min(30rem, 100%)",
  },
});
