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
      <Pressable onPress={handleAddOrder} style={styles.button}>
        <Text>Confirmar</Text>
      </Pressable>
      <Text>Total:${cart.total}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
  },
  button: {
    borderColor: colors.ligthBlue,
    borderWidth: 3,
    width: "60%",
  },
});
