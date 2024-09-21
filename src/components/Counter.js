import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../features/counter/CounterSlice";
import { colors } from "../global/colors";

export const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [input, setInput] = useState(0);

  const handleInput = (t) => {
    setInput(Number(t));
  };

  return (
    <View style={styles.container}>
      <View styles={styles.containerCounter}>
        <Pressable onPress={() => dispatch(decrement())} style={styles.button}>
          <Text styles={styles.buttonText}>-</Text>
        </Pressable>
        <View style={styles.count}>
          <Text>{count}</Text>
        </View>
        <Pressable onPress={() => dispatch(increment())} style={styles.button}>
          <Text styles={styles.buttonText}>+</Text>
        </Pressable>
      </View>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          value={String(input)}
          onChangeTexte={handleInput}
        />
        <Pressable
          onPress={() => dispatch(incrementByAmount(input))}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Agregar</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 10,
  },
  containerCounter: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: colors.ligthBlue,
    minWidth: 50,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 3,
    margin: 5,
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
  },
  count: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: "auto",
    textAlign: "center",
    padding: 10,
  },
  containerInput: {
    flexDirection: "row",
    margin: 10,
  },
  input: {
    width: 60,
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 3,
  },
});