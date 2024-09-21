import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "../components/Header";
import { Cart } from "../screens/Cart";

const Stack = createNativeStackNavigator();

export const CartStack = () => {
  return (
    <Stack.Navigator
      screenOptions={() => {
        return {
          header: () => <Header title="Carrito" />,
        };
      }}
    >
      <Stack.Screen name="Products" component={Cart} />
    </Stack.Navigator>
  );
};
