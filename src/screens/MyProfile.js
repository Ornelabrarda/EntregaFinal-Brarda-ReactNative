import { StyleSheet, Image, View, Pressable, Text } from "react-native";
import { colors } from "../global/colors";
import { useSelector } from "react-redux";
import { useGetUserQuery } from "../services/shop.js";
import { LoadingSpinner } from "../components/LoadingSpinner.js";

export const MyProfile = ({ navigation }) => {
  const localId = useSelector((state) => state.auth.localId);
  const { data: user, isLoading } = useGetUserQuery({ localId });

  if (isLoading) return <LoadingSpinner />;

  return (
    <View style={styles.container}>
      <Image
        source={
          user.image
            ? { uri: user.image }
            : require("../../assets/people_14024731.png")
        }
        resizeMode="cover"
        style={styles.image}
      />
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("ImageSelector")}
      >
        <Text style={styles.text}>Agregar imagen de perfil</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 70,
    alignItems: "center",
    gap: 20,
  },
  image: {
    width: 150,
    height: 150,
  },
  button: {
    width: "90%",
    backgroundColor: colors.blue,
    padding: 10,
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
  },
});
