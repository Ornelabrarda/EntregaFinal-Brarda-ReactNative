import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import { useEffect } from "react";
import AuthStack from "./AuthStack";
import { useDispatch, useSelector } from "react-redux";
import { fetchSession } from "../db";
import { setUser } from "../features/auth/AuthSlice";

export const MainNavigator = () => {
  const idToken = useSelector((state) => state.auth.idToken);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const sessions = await fetchSession();
      if (sessions.rows.length) {
        dispatch(setUser(sessions.rows._array[0]));
      }
    })();
  }, []);

  return (
    <NavigationContainer>
      {idToken ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});
