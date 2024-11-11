import { StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors";

export const EmptyOrder = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerCart}>
        <Text style={styles.title}>
          No tenes ordenes de compra confirmadas!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerCart: {
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: 500,
    margin: "5%",
    borderRadius: 5,
    padding: 10,
    gap: 30,
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
});
