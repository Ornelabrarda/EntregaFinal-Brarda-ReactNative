import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  useWindowDimensions,
} from "react-native";
import { colors } from "../global/colors";
import { useNavigation } from "@react-navigation/native";

export const ProductItem = ({ product }) => {
  const { width, heigth } = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <Pressable
      styles={styles.container}
      onPress={() => navigation.navigate("Detail", { id: product.id })}
    >
      <View style={styles.containerCard}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{ uri: product.thumbnail }}
        />
        <Text
          style={[
            styles.title,
            width < 300 ? styles.titleMin : styles.titleMax,
          ]}
        >
          {product.title}
        </Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  containerCard: {
    width: "80%",
    margin: "10%",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.blue,
    borderWidth: 3,
    borderRadius: 5,
    padding: 10,
    gap: 10,
  },
  title: {
    textAlign: "center",
    color: colors.black,
    fontFamily: "NunitoSansRegular",
  },
  titleMin: {
    fontSize: 14,
  },
  titleMax: {
    fontSize: 20,
  },
  image: {
    minWidth: 130,
    width: "20vw",
    maxWidth: 170,
    minHeight: 130,
    height: "20vw",
    maxHeight: 170,
    borderRadius: 3,
  },
  price: {
    textAlign: "center",
    fontSize: 15,
    fontFamily: "NunitoSansRegular",
    color: colors.black,
  },
});
