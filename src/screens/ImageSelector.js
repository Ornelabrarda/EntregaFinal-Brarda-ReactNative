import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { colors } from "../global/colors";
import { useState } from "react";
import { usePatchImageProfileMutation } from "../services/shop";
import { useSelector } from "react-redux";

export const ImageSelector = ({ navigation }) => {
  const [image, setImage] = useState("");
  const [triggerAddImageProfile] = usePatchImageProfileMutation();
  const localId = useSelector((state) => state.auth.localId);

  const pickImage = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) return;
    const result = await ImagePicker.launchCameraAsync({
      aspect: [9, 9],
      quality: 0.2,
      base64: true,
      allowsEditing: true,
    });
    if (result.canceled) return;
    console.log(result);
    setImage("data:image/jpeg;base64," + result.assets[0].base64);
  };

  const confimrImage = () => {
    triggerAddImageProfile({ image, localId });
    navigation.navigate("MyProfile");
  };

  return (
    <View style={styles.container}>
      <Image
        source={
          image ? { uri: image } : require("../../assets/people_14024731.png")
        }
        resizeMode="cover"
        style={styles.image}
      />
      <Pressable style={styles.button} onPress={pickImage}>
        <Text style={styles.text}>Tomar foto</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={confimrImage}>
        <Text style={styles.text}>Confirmar</Text>
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
    borderRadius: 80,
  },
  button: {
    width: "90%",
    backgroundColor: colors.blue,
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
  },
});
