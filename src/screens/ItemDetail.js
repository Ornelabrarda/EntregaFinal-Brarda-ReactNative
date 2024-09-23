import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { colors } from "../global/colors.js";
import { addItemCart } from "../features/cart/CartSlice.js";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { useGetProductQuery } from "../services/shop.js";
import { LoadingSpinner } from "../components/LoadingSpinner.js";

export const ItemDetail = ({ route }) => {
  const { id } = route.params;
  const { data: product, isLoading } = useGetProductQuery(id);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleAddItemCart = () => {
    dispatch(addItemCart({ ...product, quantity: 1 }));
    navigation.navigate("CartStack");
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <View style={styles.container}>
      <View style={styles.containerCard}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{ uri: product.thumbnail }}
        />
        <Text>{product.title}</Text>
        <Text>{product.brand}</Text>
        <Text>{product.description}</Text>
        <Text>${product.price}</Text>
        <Pressable style={styles.button} onPress={handleAddItemCart}>
          <Text style={styles.buttonText}>Comprar</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
  },
  containerCard: {
    width: "90%",
    margin: "5%",
    height: 500,
    alignItems: "center",
    borderColor: colors.blue,
    borderWidth: 3,
    borderRadius: 5,
  },
  image: {
    minWidt: 320,
    width: "100%",
    maxWidth: 350,
    minHeight: 320,
    maxHeight: 350,
    borderRadius: 3,
  },
  button: {
    width: "70%",
    height: 30,
    borderColor: colors.ligthBlue,
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
  },
});
