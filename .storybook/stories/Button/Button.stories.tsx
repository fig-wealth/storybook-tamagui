import React from "react";
import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import { MyButton } from "./Button";

const meta = {
  title: "Button",
  component: MyButton,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    text: "Hello world",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16, alignItems: "flex-start" }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof MyButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const Primary: Story = {
  args: {
    text: "Primary",
    style: "primary",
  },
};

export const Secondary: Story = {
  args: {
    text: "Secondary",
    style: "secondary",
  },
};

export const Info: Story = {
  args: {
    text: "Info",
    style: "info",
  },
};

export const Warning: Story = {
  args: {
    text: "Warning",
    style: "warning",
  },
};

export const Danger: Story = {
  args: {
    text: "Danger",
    style: "danger",
  },
};

export const Success: Story = {
  args: {
    text: "Success",
    style: "success",
  },
};
