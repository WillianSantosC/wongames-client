import { Meta, StoryObj } from "@storybook/react";

import UserDropdown, { UserDropdownProps } from ".";

export default {
  title: "components/UserDropdown",
  component: UserDropdown,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "won-dark",
    },
  },
} as Meta;

export const Default: StoryObj<UserDropdownProps> = {
  args: { username: "Willian" },
  render: (args) => (
    <div
      style={{ maxWidth: "98%", display: "flex", justifyContent: "flex-end" }}
    >
      <UserDropdown {...args} />
    </div>
  ),
};
