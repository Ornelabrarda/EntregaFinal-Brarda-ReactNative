import { Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/counter/CounterSlice";
import { colors } from "../global/colors";

export const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Cantidad</Text>
      </View>

      <Pressable onPress={() => dispatch(decrement())}>
        <Text styles={styles.buttonText}>-</Text>
      </Pressable>
      <View style={styles.count}>
        <Text>{count}</Text>
      </View>
      <Pressable onPress={() => dispatch(increment())}>
        <Text styles={styles.buttonText}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
    borderColor: colors.black,
    borderWidth: 2,
    borderRadius: 10,
    padding: 7,
    margin: 10,
  },
  text: {
    fontSize: 20,
  },
  buttonText: {
    fontSize: 25,
  },
  count: {
    color: colors.ligthBlue,
  },
});
