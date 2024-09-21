import { StyleSheet, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export const CartItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.brand}>{item.brand}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <FontAwesome name="trash" size={24} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
