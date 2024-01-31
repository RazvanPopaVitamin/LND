import { FlatList, StyleSheet } from "react-native";

import { CATEGORIES } from "../assets/data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function renderCategoryItems(itemData) {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
}

function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItems}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
