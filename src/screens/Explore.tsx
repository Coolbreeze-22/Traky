import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  useColorScheme,
  View,
} from "react-native";

const Explore = () => {
  const colorScheme = useColorScheme();

  const isDark = colorScheme === "dark";

  const navigation = useNavigation<any>();

  return (
    <ScrollView
      style={[
        styles.container,
        {
          backgroundColor: isDark ? "#020617" : "#f8fafc",
        },
      ]}
    >
      <Text
        style={[
          styles.title,
          {
            color: isDark ? "#ffffff" : "#111827",
          },
        ]}
      >
        Explore Features
      </Text>

      <View
        style={[
          styles.featureCard,
          {
            backgroundColor: isDark ? "#1e293b" : "#ffffff",
          },
        ]}
      >
        <Ionicons name="barcode" size={30} color="#2563eb" />

        <Text
          style={[
            styles.featureTitle,
            {
              color: isDark ? "#ffffff" : "#111827",
            },
          ]}
        >
          Barcode Scanning
        </Text>

        <Text
          style={[
            styles.featureText,
            {
              color: isDark ? "#cbd5e1" : "#475569",
            },
          ]}
        >
          Scan products quickly using QR and barcode technology.
        </Text>
      </View>

      <View
        style={[
          styles.featureCard,
          {
            backgroundColor: isDark ? "#1e293b" : "#ffffff",
          },
        ]}
      >
        <Ionicons name="notifications" size={30} color="#2563eb" />

        <Text
          style={[
            styles.featureTitle,
            {
              color: isDark ? "#ffffff" : "#111827",
            },
          ]}
        >
          Notifications
        </Text>

        <Text
          style={[
            styles.featureText,
            {
              color: isDark ? "#cbd5e1" : "#475569",
            },
          ]}
        >
          Receive alerts for low stock and shipment updates.
        </Text>

        {/* Switch Component Example */}
        <Switch value />

        {/* Button Example */}
        <Pressable onPress={() => navigation.navigate("Modal")}>
          <Text>Open More Info</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 20,
  },

  featureCard: {
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
    gap: 10,
  },

  featureTitle: {
    fontSize: 22,
    fontWeight: "600",
  },

  featureText: {
    fontSize: 15,
    lineHeight: 22,
  },
});
