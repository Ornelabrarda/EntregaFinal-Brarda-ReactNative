import { Pressable, StyleSheet, Text, View } from "react-native";
import InputForm from "../components/ImputForm.js";
import SubmitButton from "../components/SubmitButton.js";
import { colors } from "../global/colors.js";
import { useState } from "react";
import { useLoginMutation } from "../services/auth.js";
import { setUser } from "../features/auth/AuthSlice.js";
import { useDispatch } from "react-redux";
import { loginSchema } from "../validaciones/loginSchema.js";
import { insertSession } from "../db/index.js";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [triggerLogin, { data, isSuccess, isError, error }] =
    useLoginMutation();
  const dispatch = useDispatch();

  const onSubmit = async () => {
    try {
      loginSchema.validateSync({ email, password });
      const { data } = await triggerLogin({ email, password });
      insertSession(data);
      dispatch(
        setUser({
          email: data.email,
          idToken: data.idToken,
          localId: data.localId,
        })
      );
    } catch (error) {
      console.log(error);
      switch (error.path) {
        case "email":
          setErrorEmail(error.message);
          setErrorPassword("");
          break;
        case "password":
          setErrorPassword(error.message);
          setErrorEmail("");
          break;
        default:
          break;
      }
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <InputForm
          label="Email"
          value={email}
          onChangeText={(t) => setEmail(t)}
          isSecure={false}
          error={errorEmail}
        />
        <InputForm
          label="Password"
          value={password}
          onChangeText={(t) => setPassword(t)}
          isSecure={true}
          error={errorPassword}
        />
        <SubmitButton onPress={onSubmit} title="Iniciar sesion" />
        <Text style={styles.sub}>¿No tenes una cuenta?</Text>
        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text style={styles.subLink}>Registro</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "90%",
    backgroundColor: colors.blue,
    gasp: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  title: {
    fontSize: 14,
  },
  subLink: {
    fontSize: 14,
    color: colors.ligthBlue,
  },
});
