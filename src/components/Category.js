import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors";
import { useNavigation } from "@react-navigation/native";

export const Category = ({ item }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate("Products", { category: item })}
    >
      <View style={styles.container}>
        <Text style={styles.text}>{item}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginHorizontal: "5%",
    backgroundColor: "white",
    marginVertical: 10,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.ligthBlue,
    borderWidth: 3,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },

  text: {
    fontSize: 16,
    fontFamily: "NunitoSansBold",
    color: colors.blue,
    fontWeight: "bold",
  },
});
