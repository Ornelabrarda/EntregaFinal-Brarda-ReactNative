import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { colors } from "../global/colors.js";
import AntDesign from "@expo/vector-icons/AntDesign";
import { deleteSession } from "../db/index.js";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../features/auth/AuthSlice.js";

export const Header = ({ title }) => {
  const navigation = useNavigation();

  const route = useRoute();

  const idToken = useSelector((state) => state.auth.idToken);

  const dispatch = useDispatch();

  const onLogout = () => {
    deleteSession();
    dispatch(clearUser());
  };

  return (
    <View style={styles.container}>
      {route.name !== "Home" && (
        <Pressable onPress={() => navigation.goBack()} style={styles.icon}>
          <AntDesign name="left" size={24} color="white" />
        </Pressable>
      )}
      <Text style={styles.text}>{title}</Text>
      {idToken && (
        <Pressable onPress={onLogout} style={styles.logout}>
          <AntDesign name="logout" size={30} color="white" />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    width: "100%",
    height: 80,
    backgroundColor: colors.blue,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  text: {
    fontSize: 25,
    fontFamily: "NunitoSansBold",
    color: colors.white,
  },
  icon: {
    position: "absolute",
    left: 20,
  },
  logout: {
    position: "absolute",
    right: 10,
    bottom: 30,
  },
});
