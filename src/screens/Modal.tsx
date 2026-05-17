import { StyleSheet, Text, useColorScheme, View } from "react-native";

const Modal = () => {
  const colorScheme = useColorScheme();

  const isDark = colorScheme === "dark";

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDark ? "#020617" : "#ffffff",
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
        More About Traky
      </Text>

      <Text
        style={[
          styles.text,
          {
            color: isDark ? "#cbd5e1" : "#475569",
          },
        ]}
      >
        Traky helps companies manage inventory, warehouse operations, shipments,
        and logistics tracking from a single mobile platform.
      </Text>
    </View>
  );
};

export default Modal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },

  text: {
    fontSize: 16,
    lineHeight: 26,
  },
});
