import { Meta, StoryObj } from "@storybook/react";

import TextContent, { TextContentProps } from ".";
import { item as textMock } from "./mock";

export default {
  title: "components/TextContent",
  component: TextContent,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark",
    },
  },
  args: textMock,
} as Meta;

export const Default: StoryObj<TextContentProps> = {};
