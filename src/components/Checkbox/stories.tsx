import { Meta, StoryObj } from "@storybook/react";

import Checkbox, { CheckboxProps } from ".";

export default {
  title: "components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark",
    },
  },
  argTypes: {
    onCheck: { action: "checked" },
  },
} as Meta;

export const Default: StoryObj<CheckboxProps> = {
  render: (args) => (
    <>
      <div style={{ padding: 10 }}>
        <Checkbox
          name="category"
          label="Action"
          labelFor="action"
          isChecked
          {...args}
        />
      </div>
      <div style={{ padding: 10 }}>
        <Checkbox
          name="category"
          label="Adventure"
          labelFor="adventure"
          {...args}
        />
      </div>
      <div style={{ padding: 10 }}>
        <Checkbox
          name="category"
          label="Strategy"
          labelFor="strategy"
          {...args}
        />
      </div>
    </>
  ),
};
