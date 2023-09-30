import { Image, Platform, StyleSheet, Text, View } from "react-native";
import theme from "../theme";
const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 10,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  logo: {
    width: 66,
    height: 58,
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  profile: {
    display: "flex",
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
    gap: 40,
    marginLeft: 10,
  },
  rating: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 5,
    alignSelf: "flex-start",
    borderRadius: 5,
    color: "#fff",
  },
  font: {
    fontFamily: Platform.select({
      ios: theme.fonts.ios,
      android: theme.fonts.android,
    }),
  },
});
function RepositoryItem({ item }) {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.tinyLogo}
          source={{ uri: `${item.ownerAvatarUrl} ` }}
        />
        <View style={styles.column}>
          <Text
            style={[
              { fontSize: theme.fontSizes.subheading },
              { fontWeight: theme.fontWeights.bold },
              styles.font,
            ]}
          >
            {item.fullName}
          </Text>
          <Text
            style={[
              { fontSize: theme.fontSizes.body },
              { fontWeight: theme.fontWeights.normal },
            ]}
          >
            {item.description}
          </Text>
          <Text style={styles.button}>{item.language}</Text>
        </View>
      </View>
      <View style={styles.rating}>
        <Text>
          {(item.stargazersCount / 1000).toFixed(1)}k {"\n"}
          Stars
        </Text>
        <Text>
          {(item.forksCount / 1000).toFixed(1)}k {"\n"}
          Forks
        </Text>
        <Text>
          {item.reviewCount} {"\n"}
          Reviews
        </Text>
        <Text>
          {item.ratingAverage}
          {"\n"}
          Rating
        </Text>
      </View>
    </View>
  );
}

export default RepositoryItem;
