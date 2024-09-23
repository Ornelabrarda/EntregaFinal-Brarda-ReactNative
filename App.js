import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { colors } from "./src/global/colors.js";
import { MainNavigator } from "./src/navigation/MainNavigator.js";
import { useFonts } from "expo-font";
import { fonts } from "./src/global/fonts.js";
import { store } from "./src/app/store.js";
import { Provider } from "react-redux";
import { init } from "./src/db/index.js";

export default function App() {
  init();

  const [fontLoaded] = useFonts(fonts);

  if (!fontLoaded) {
    return null;
  }

  return (
    <>
      <Provider store={store}>
        <MainNavigator />
      </Provider>
      <StatusBar style="light" backgroundColor={colors.black} />
    </>
  );
}

const styles = StyleSheet.create({});
