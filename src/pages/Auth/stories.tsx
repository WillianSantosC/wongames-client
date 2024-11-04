import { Meta, StoryObj } from "@storybook/react";

import Auth, { AuthProps } from ".";

export default {
  title: "pages/Auth",
  component: Auth,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const SignIn: StoryObj<AuthProps> = {
  args: { title: "Sign In" },
  render: (args) => <Auth {...args}>children</Auth>,
};

export const SignUp: StoryObj<AuthProps> = {
  args: { title: "Sign Up" },
  render: (args) => <Auth {...args}>children</Auth>,
};
