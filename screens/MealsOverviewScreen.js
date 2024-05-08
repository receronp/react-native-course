import { useLayoutEffect } from "react";

import MealList from "../components/MealList/MealList";
import { CATEGORIES, MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) != -1;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  return <MealList items={displayedMeals} />;
}

export default MealsOverviewScreen;
