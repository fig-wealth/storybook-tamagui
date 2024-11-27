import React from "react";
import { Button, GetThemeValueForKey, Text } from "tamagui";

export type MyButtonProps = {
  onPress?: () => void;
  text: string;
  style?: "primary" | "secondary" | "info" | "warning" | "danger" | "success";
};

const getBackgroundColor = (
  style?: "primary" | "secondary" | "info" | "warning" | "danger" | "success"
): "unset" | GetThemeValueForKey<"backgroundColor"> => {
  switch (style) {
    case "primary":
      return "cornflowerblue";
    case "secondary":
      return "gray";
    case "info":
      return "cyan";
    case "warning":
      return "yellow";
    case "danger":
      return "red";
    case "success":
      return "green";
    default:
      return "unset";
  }
};

const getColor = (
  style?: "primary" | "secondary" | "info" | "warning" | "danger" | "success"
): "unset" | GetThemeValueForKey<"color"> => {
  switch (style) {
    case "primary":
      return "white";
    case "secondary":
      return "black";
    case "info":
      return "black";
    case "warning":
      return "black";
    case "danger":
      return "white";
    case "success":
      return "white";
    default:
      return "unset";
  }
};

export const MyButton = ({ onPress, text, style }: MyButtonProps) => {
  return (
    <Button onPress={onPress} backgroundColor={getBackgroundColor(style)}>
      <Text color={getColor(style)}>{text}</Text>
    </Button>
  );
};
