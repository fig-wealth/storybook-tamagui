import { StatusBar } from "expo-status-bar";
import { TamaguiProvider, View, Text } from "@tamagui/core";
import config from "./tamagui.config";

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <View
        display="flex"
        flex={1}
        justifyContent="center"
        alignItems="center"
        backgroundColor="$background"
      >
        <Text color="$color">
          Open up App.tsx to start working on your app!
        </Text>
        <StatusBar style="auto" />
      </View>
    </TamaguiProvider>
  );
}
