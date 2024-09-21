import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const SubmitButton = ({ title, onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  button: {
    width: "60%",
    backgroundColor: Colors.blue,
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
  },
});
