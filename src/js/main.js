import {
  fetchCategories,
  searchMeals,
  filterByCategory,
} from "./api/mealdb.js";
import { appState } from "./state/appState.js";
import {
  renderCategories,
  renderRecipes,
  toggleLoading,
} from "./ui/components.js";

document.addEventListener("DOMContentLoaded", async () => {
  const categoriesGrid = document.getElementById("categories-grid");
  const recipesGrid = document.getElementById("recipes-grid");
  const searchInput = document.getElementById("search-input");
  const recipesCount = document.getElementById("recipes-count");

  toggleLoading(true);

  try {
    const categories = await fetchCategories();
    renderCategories(categories, categoriesGrid);

    const initialMeals = await searchMeals("chicken");
    appState.meals = initialMeals;
    renderRecipes(appState.meals, recipesGrid);

    if (recipesCount) {
      recipesCount.textContent = `Showing ${appState.meals.length} recipes`;
    }
  } catch (error) {
    console.error("Error initializing app:", error);
  } finally {
    toggleLoading(false);
  }

  if (searchInput) {
    searchInput.addEventListener("input", async (e) => {
      const query = e.target.value.trim();
      toggleLoading(true);
      const meals = await searchMeals(query);
      appState.meals = meals;
      renderRecipes(appState.meals, recipesGrid);
      if (recipesCount) {
        recipesCount.textContent = `Showing ${appState.meals.length} recipes`;
      }
      toggleLoading(false);
    });
  }

  if (categoriesGrid) {
    categoriesGrid.addEventListener("click", async (e) => {
      const card = e.target.closest(".category-card");
      if (!card) return;
      const categoryName = card.dataset.category;

      toggleLoading(true);
      const meals = await filterByCategory(categoryName);
      appState.meals = meals;
      renderRecipes(appState.meals, recipesGrid);
      if (recipesCount) {
        recipesCount.textContent = `Showing ${appState.meals.length} recipes`;
      }
      toggleLoading(false);
    });
  }
});
