const theme = {
  tokens: {
    extend: {
      grid: {
        container: { value: "130rem" },
        gutter: { value: "3.2rem" },
      },
      border: {
        radius: { value: "0.4rem" },
      },
      colors: {
        primary: { value: "#F231A5" },
        secondary: { value: "#3CD3C1" },
        mainBg: { value: "#06092B" },
        white: { value: "#FAFAFA" },
        black: { value: "#030517" },
        lightGray: { value: "#EAEAEA" },
        gray: { value: "#8F8F8F" },
        darkGray: { value: "#2E2F42" },
      },
      font: {
        family: {
          value:
            "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        },
        light: { value: "300" },
        normal: { value: "400" },
        bold: { value: "600" },
        sizes: {
          xsmall: { value: "1.2rem" },
          small: { value: "1.4rem" },
          medium: { value: "1.6rem" },
          large: { value: "1.8rem" },
          xlarge: { value: "2.0rem" },
          xxlarge: { value: "2.8rem" },
        },
      },
      spacings: {
        xxsmall: { value: "0.8rem" },
        xsmall: { value: "1.6rem" },
        small: { value: "2.4rem" },
        medium: { value: "3.2rem" },
        large: { value: "4.0rem" },
        xlarge: { value: "4.8rem" },
        xxlarge: { value: "5.6rem" },
      },
      layers: {
        base: { value: "10" },
        menu: { value: "20" },
        overlay: { value: "30" },
        modal: { value: "40" },
        alwaysOnTop: { value: "50" },
      },
      breakpoints: {
        sm: { value: "640px" },
        md: { value: "768px" },
        lg: { value: "1024px" },
        xl: { value: "1280px" },
        "2xl": { value: "1536px" },
      },
    },
  },
};

export default theme;
