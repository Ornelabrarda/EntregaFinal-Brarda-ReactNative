import { StyleSheet, Text, View, Image } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export const CartItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{ uri: item.thumbnail }}
        />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.title}>{item.title}</Text>

        <Text style={styles.price}>${item.price}</Text>

        <FontAwesome name="trash" size={20} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    margin: "5%",
    height: "auto",
    borderRadius: 3,
    padding: 10,
    gap: 5,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 5,
  },

  containerImage: {
    width: "30%",
    alignItems: "center",
  },
  image: {
    minWidt: 70,
    width: "100%",
    maxWidth: 50,
    minHeight: 70,
    maxHeight: 50,
  },
  containerText: {
    width: "70%",
    gap: 5,
  },
});
