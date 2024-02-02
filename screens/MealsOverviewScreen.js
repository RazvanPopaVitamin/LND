import { CATEGORIES, MEALS } from "../assets/data/dummy-data";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen({ route, navigation }) {
  const { categoryId: catId } = route.params;

  useLayoutEffect(() => {
    const catTitle = CATEGORIES.find((category) => category.id === catId).title;

    navigation.setOptions({
      title: catTitle,
    });
  }, [catId, navigation]);

  const displayedMeals = MEALS.filter((item) => {
    return item.categoryIds.indexOf(catId) >= 0;
  });

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
