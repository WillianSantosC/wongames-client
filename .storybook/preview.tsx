import React from "react";
import "../src/app/globals.css";
import { token } from "../styled-system/tokens";

export const parameters = {
  backgrounds: {
    values: [
      { name: "won-light", value: token("colors.white") },
      { name: "won-dark", value: token("colors.mainBg") },
    ],
    default: "won-light",
  },
};

export const decorators = [
  (Story) => (
    <>
      <Story />
    </>
  ),
];
