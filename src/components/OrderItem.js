import { Pressable, StyleSheet, Text, View } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

export const OrderItem = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{item.createdAt}</Text>
      <Text style={styles.total}>Total: ${item.total}</Text>
      <Pressable
        onPress={() => navigation.navigate("OrderDetail", { id: item.id })}
      >
        <FontAwesome5 name="search" size={24} color="black" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    margin: "5%",
    height: "auto",
    borderRadius: 3,
    padding: 15,
    gap: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 5,
  },
  date: {
    fontFamily: "NunitoSansRegular",
    fontSize: 15,
  },
  total: {
    fontFamily: "NunitoSansRegular",
    fontSize: 18,
  },
});
