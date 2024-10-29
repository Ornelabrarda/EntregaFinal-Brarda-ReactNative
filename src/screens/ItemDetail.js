import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { colors } from "../global/colors.js";
import { addItemCart } from "../features/cart/CartSlice.js";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { useGetProductQuery } from "../services/shop.js";
import { LoadingSpinner } from "../components/LoadingSpinner.js";
import { Counter } from "../components/Counter.js";

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
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.title}>{product.brand}</Text>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{ uri: product.thumbnail }}
        />

        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.description}>
          Stock desponible: {product.stock}
        </Text>
        <Text style={styles.price}>${product.price}</Text>
        <View>
          <Counter />
        </View>
        <Pressable style={styles.button} onPress={handleAddItemCart}>
          <Text style={styles.buttonText}>Agregar al carrito</Text>
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
    height: 650,
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
    width: "75%",
    height: 35,
    backgroundColor: colors.blue,
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  buttonText: {
    color: colors.white,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "NunitoSansRegular",
    color: colors.black,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    fontFamily: "NunitoSansRegular",
    color: colors.black,
  },
  price: {
    fontSize: 25,
    fontFamily: "OpenSans",
    color: colors.blue,
    fontWeight: "bold",
  },
});
