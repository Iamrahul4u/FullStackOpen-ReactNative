import Constants from "expo-constants";
import { Text, StyleSheet, View, Platform } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Navigate, Route, Routes } from "react-router-native";
import SignIn from "./SignIn";
import theme from "../theme";
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
  font: {
    fontFamily: Platform.select({
      ios: theme.fonts.ios,
      android: theme.fonts.android,
    }),
  },
});

const Main = () => {
  return (
    <View style={[styles.container, styles.font]}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} />
        <Route path='/sign' element={<SignIn />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </View>
  );
};

export default Main;
