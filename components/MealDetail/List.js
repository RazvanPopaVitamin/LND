import { StyleSheet, Text, View } from "react-native";

function List({ data }) {
  return data.map((dataPoint) => (
    <View style={styles.listItem}>
      <Text style={styles.itemText} key={dataPoint}>
        {dataPoint}
      </Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 8,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
