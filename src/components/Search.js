import { Pressable, StyleSheet, TextInput, View, Text } from "react-native";
import { colors } from "../global/colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";

export const Search = ({ onSearch }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handelInputChange = (t) => {
    setInput(t);
  };

  const handleRemoveInput = () => {
    setInput("");
    onSearch("");
    setError("");
  };

  const search = () => {
    const regex = /[^a-zA-z0-9]/;
    if (regex.test(input)) {
      setError("caracteres no validos");
    } else {
      setError("");
      onSearch(input);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          placeholder="Buscar producto"
          placeholderTextColor="black"
          value={input}
          onChangeText={handelInputChange}
        />
        <View style={styles.containerButton}>
          <Pressable onPress={search}>
            <AntDesign name="search1" size={30} color="white" />
          </Pressable>
          <Pressable onPress={handleRemoveInput}>
            <AntDesign name="closecircleo" size={24} color="white" />
          </Pressable>
        </View>
      </View>

      <Text style={styles.errorText}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 20,
  },
  containerInput: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: colors.black,
    width: "75%",
    padding: 5,
  },
  containerButton: {
    backgroundColor: colors.ligthBlue,
    flexDirection: "row",
    borderRadius: 2,
    borderColor: colors.black,
    borderWidth: 2,
    width: "22%",
    padding: 5,
    gap: 5,
  },
  errorText: {
    marginLeft: 20,
    color: "red",
    fontSize: 15,
    fontFamily: "OpenSans",
  },
});
