import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

export const Home = () => {
  const colorScheme = useColorScheme();

  const isDark = colorScheme === "dark";

  const navigation = useNavigation<any>();

  return (
    <ScrollView
      style={[
        styles.container,
        {
          backgroundColor: isDark ? "#0f172a" : "#f8fafc",
        },
      ]}
    >
      {/* Hero Section */}
      <View style={styles.hero}>
        <Text
          style={[
            styles.heading,
            {
              color: isDark ? "#ffffff" : "#111827",
            },
          ]}
        >
          Traky
        </Text>

        <Text
          style={[
            styles.subHeading,
            {
              color: isDark ? "#cbd5e1" : "#475569",
            },
          ]}
        >
          Smart inventory and logistics tracking system for monitoring stock,
          shipments, warehouse movement, and delivery operations in real time.
        </Text>
      </View>

      {/* Stats Cards */}
      <View style={styles.cardContainer}>
        <View
          style={[
            styles.card,
            {
              backgroundColor: isDark ? "#1e293b" : "#ffffff",
            },
          ]}
        >
          <Ionicons name="cube" size={28} color="#2563eb" />

          <Text
            style={[
              styles.cardTitle,
              {
                color: isDark ? "#ffffff" : "#111827",
              },
            ]}
          >
            Inventory
          </Text>

          <Text
            style={[
              styles.cardText,
              {
                color: isDark ? "#cbd5e1" : "#475569",
              },
            ]}
          >
            Track stock quantities and product movement.
          </Text>
        </View>

        <View
          style={[
            styles.card,
            {
              backgroundColor: isDark ? "#1e293b" : "#ffffff",
            },
          ]}
        >
          <Ionicons name="car" size={28} color="#2563eb" />

          <Text
            style={[
              styles.cardTitle,
              {
                color: isDark ? "#ffffff" : "#111827",
              },
            ]}
          >
            Logistics
          </Text>

          <Text
            style={[styles.cardText, { color: isDark ? "#cbd5e1" : "#475569" }]}
          >
            Monitor deliveries and shipment progress.
          </Text>
        </View>
      </View>

      {/* Button Example */}
      <Pressable
        onPress={() => navigation.navigate("Modal")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Open More Info</Text>
      </Pressable>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  hero: {
    marginTop: 50,
    marginBottom: 30,
  },

  heading: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 10,
  },

  subHeading: {
    fontSize: 16,
    lineHeight: 24,
  },

  cardContainer: {
    gap: 20,
  },

  card: {
    padding: 20,
    borderRadius: 20,
    gap: 10,
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: "600",
  },

  cardText: {
    fontSize: 15,
    lineHeight: 22,
  },

  button: {
    marginTop: 30,
    backgroundColor: "#2563eb",
    padding: 18,
    borderRadius: 14,
    alignItems: "center",
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
