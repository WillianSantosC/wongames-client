import { defineConfig } from "@pandacss/dev";
import globalCss from "@/styles/global";
import theme from "@/styles/theme";
import conditions from "@/styles/conditions";

export default defineConfig({
  // Project Font Faces
  globalFontface: {
    Poppins: [
      {
        fontStyle: "normal",
        fontWeight: 300,
        fontDisplay: "swap",
        src: "local('Poppins Light'), local('Poppins-Light'),url('/fonts/poppins-v21-latin-300.woff2') format('woff2')",
      },
      {
        fontStyle: "normal",
        fontWeight: 400,
        fontDisplay: "swap",
        src: "local('Poppins Regular'), local('Poppins-Regular'),url('/fonts/poppins-v21-latin-regular.woff2') format('woff2')",
      },
      {
        fontStyle: "normal",
        fontWeight: 600,
        fontDisplay: "swap",
        src: "local('Poppins SemiBold'), local('Poppins-SemiBold'),url('/fonts/poppins-v21-latin-600.woff2') format('woff2')",
      },
    ],
  },

  conditions,

  // Global css styles
  globalCss,

  // Useful for theme customization
  theme,

  // Whether to use css reset
  preflight: true,

  // Remove default design tokens
  presets: [],

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // The output directory for your css system
  outdir: "styled-system",

  // The JSX framework to use
  jsxFramework: "react",
});
