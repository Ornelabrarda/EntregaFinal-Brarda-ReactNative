import { StyleSheet, Text, View } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export const OrderItem = ({ item }) => {
  return (
    <View styles={styles.container}>
      <Text style={styles.date}>{item.createdAt}</Text>
      <Text style={styles.total}>Total: ${item.total}</Text>
      <FontAwesome5 name="search" size={24} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({});
