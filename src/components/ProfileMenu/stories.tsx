import { Meta, StoryObj } from "@storybook/react";

import ProfileMenu, { ProfileMenuProps } from ".";

export default {
  title: "components/ProfileMenu",
  component: ProfileMenu,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark",
    },
  },
} as Meta;

export const Default: StoryObj<ProfileMenuProps> = {};
