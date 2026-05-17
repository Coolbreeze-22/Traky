import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useColorScheme } from "react-native";

import ModalScreen from "../screens/Modal";
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();

// Main Navigation Wrapper
export default function AppNavigator() {
  const colorScheme = useColorScheme();
  const currentTheme = colorScheme === "dark" ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={currentTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTabs"
          component={TabNavigator}
          // options={{ headerShown: false }}
          options={{
            // headerShown: false,
            title: "Smart tracking simplified",
            // headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 16,
              // fontWeight: "400",
              color: "#2563eb",
            },
          }}
        />
        <Stack.Screen
          name="Modal"
          component={ModalScreen}
          options={{
            presentation: "modal",
            title: "Modal Info",
          }}
        />
      </Stack.Navigator>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </NavigationContainer>
  );
}
