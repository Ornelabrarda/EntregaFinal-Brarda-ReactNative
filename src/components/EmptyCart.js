import { Pressable, StyleSheet, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { colors } from "../global/colors";
import { useNavigation } from "@react-navigation/native";

export const EmptyCart = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerCart}>
        <Text style={styles.title}>Tu carrito esta vacio!</Text>
        <AntDesign name="shoppingcart" size={85} color="black" />
        <Pressable onPress={() => navigation.navigate("Home")}>
          <Text style={styles.text}>Descubrir Productos</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerCart: {
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: 500,
    margin: "10%",
    borderRadius: 5,
    padding: 10,
    gap: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  title: {
    fontFamily: "NunitoSansBold",
    fontSize: 25,
    color: colors.blue,
  },
  text: {
    fontFamily: "NunitoSansBold",
    fontSize: 18,
    color: colors.black,
  },
});
