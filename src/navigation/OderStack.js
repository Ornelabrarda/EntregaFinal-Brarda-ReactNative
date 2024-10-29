import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "../components/Header";
import { Orders } from "../screens/Orders";
import { OrderDetail } from "../screens/OrderDetail.js";

const Stack = createNativeStackNavigator();

export const OrderStack = () => {
  return (
    <Stack.Navigator
      screenOptions={() => {
        return {
          header: () => <Header title="Mis compras" />,
        };
      }}
    >
      <Stack.Screen name="Compras" component={Orders} />
      <Stack.Screen name="OrderDetail" component={OrderDetail} />
    </Stack.Navigator>
  );
};
