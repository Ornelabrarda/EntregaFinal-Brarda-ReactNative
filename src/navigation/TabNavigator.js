import { StyleSheet } from "react-native";
import { ShopStack } from "./ShopStack";
import { CartStack } from "./CartStack";
import { OrderStack } from "./OderStack";
import { TabBarIcon } from "../components/TabBarIcon";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../global/colors.js";
import { ProfileStack } from "./ProfileStack.js";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={ShopStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabBarIcon focused={focused} text="Inicio" icon="home" />;
          },
        }}
      />
      <Tab.Screen
        name="CartStack"
        component={CartStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabBarIcon
                focused={focused}
                text="Carrito"
                icon="shopping-cart"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="OrderStack"
        component={OrderStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabBarIcon
                focused={focused}
                text="Compras"
                icon="shopping-bag"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="PorfileStack"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabBarIcon focused={focused} text=" Mi Perfil" icon="user" />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.blue,
    height: 70,
  },
});
