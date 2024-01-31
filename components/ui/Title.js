import { StyleSheet, Text, Platform } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    textAlign: "center",
    color: "white",
    padding: 12,
    borderWidth: Platform.OS === "ios" ? 0 : 2,
    borderColor: "white",
    maxWidth: "80%",
    width: 300,
  },
});
