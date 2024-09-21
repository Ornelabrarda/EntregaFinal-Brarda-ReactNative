import { StyleSheet, Text, View } from "react-native";
import { Categories } from "../components/Categories.js";

export const Home = () => {
  return (
    <>
      <View style={styles.container}>
        <Categories />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
