import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ItemListCategories } from "../screens/ItemListCategories";
import { ItemDetail } from "../screens/ItemDetail";
import { Home } from "../screens/Home";
import { Header } from "../components/Header";

const Stack = createNativeStackNavigator();

export const ShopStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => {
        return {
          header: () => (
            <Header
              title={
                route.name === "Home"
                  ? "Bienvenido"
                  : route.name === "Products"
                  ? route.params.category
                  : "Detalle"
              }
            />
          ),
        };
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Products" component={ItemListCategories} />
      <Stack.Screen name="Detail" component={ItemDetail} />
    </Stack.Navigator>
  );
};
