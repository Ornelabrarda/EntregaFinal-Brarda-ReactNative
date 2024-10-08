import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Register from "../screens/Register.js";
import { Header } from "../components/Header.js";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => {
        return {
          header: () => (
            <Header
              title={
                route.name === "Login" ? "inicio de sesion" : "Registrarme"
              }
            />
          ),
        };
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthStack;
