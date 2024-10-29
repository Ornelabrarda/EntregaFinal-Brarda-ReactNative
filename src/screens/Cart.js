import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { CartItem } from "../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { usePostOrderMutation } from "../services/shop";
import { colors } from "../global/colors";
import { clearCart } from "../features/cart/CartSlice";
import { EmptyCart } from "../components/EmptyCart";

export const Cart = ({ navigation }) => {
  const cart = useSelector((state) => state.cart);
  const localId = useSelector((state) => state.auth.localId);
  const [triggerPostOrder] = usePostOrderMutation();
  const dispatch = useDispatch();

  const handleAddOrder = () => {
    const createdAt = new Date().toLocaleString();
    const order = {
      ...cart,
      createdAt,
    };
    triggerPostOrder({ localId, order });
    dispatch(clearCart());
    navigation.navigate("OrderStack");
  };

  if (cart.total === 0) return <EmptyCart />;

  return (
    <View style={styles.container}>
      <FlatList
        data={cart.items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CartItem item={item} />}
      />
      <Text style={styles.text}>Total:${cart.total}</Text>
      <Pressable onPress={handleAddOrder} style={styles.button}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    gap: 20,
  },
  button: {
    width: "75%",
    height: 35,
    backgroundColor: colors.blue,
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "NunitoSansRegular",
    fontSize: 20,
    color: "white",
  },
  text: {
    fontFamily: "NunitoSansRegular",
    fontSize: 20,
    color: colors.blue,
  },
});
