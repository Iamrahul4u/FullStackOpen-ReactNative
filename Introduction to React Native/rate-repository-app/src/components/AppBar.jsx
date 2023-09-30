import { View, StyleSheet, Pressable, ScrollView } from "react-native";
import Constants from "expo-constants";
import Text from "./Text";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    display: "flex",
    flexDirection: "row",

    // ...
  },
  item: {
    marginLeft: 5,
    padding: 10,
  },
  font: {
    color: "#ffff",
    marginTop: 10,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal>
        <Link to='/'>
          <Text style={[styles.font, styles.item]}>Repositories</Text>
        </Link>
        <Link to='/sign'>
          <Text style={[styles.font, styles.item]}>Sign Up</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
