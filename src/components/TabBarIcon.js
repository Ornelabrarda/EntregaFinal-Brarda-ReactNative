import { StyleSheet, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { colors } from "../global/colors";

export const TabBarIcon = ({ text, icon, focused }) => {
  return (
    <View style={styles.container}>
      <FontAwesome
        name={icon}
        size={24}
        color={focused ? colors.white : "#ffffff88"}
      />
      <Text style={{ color: focused ? colors.white : "#ffffff88" }}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 5,
  },
});
