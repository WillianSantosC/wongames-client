import { Meta, StoryObj } from "@storybook/react";

import FormSignUp from ".";

export default {
  title: "components/Form/FormSignUp",
  component: FormSignUp,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Default: StoryObj = {
  render: () => (
    <div style={{ width: 300, margin: "auto" }}>
      <FormSignUp />
    </div>
  ),
};
