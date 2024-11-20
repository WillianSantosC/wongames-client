import { Meta, StoryObj } from "@storybook/react";

import FormProfile from ".";

export default {
  title: "components/Form/FormProfile",
  component: FormProfile,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Default: StoryObj = {
  render: () => (
    <div style={{ maxWidth: 860, margin: "auto" }}>
      <FormProfile />
    </div>
  ),
};
