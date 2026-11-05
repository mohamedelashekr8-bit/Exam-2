export const appState = {
  currentCategory: "All",
  searchQuery: "",
  meals: [],
  selectedMeal: null,
  favorites: JSON.parse(localStorage.getItem("nutriplan_favorites")) || [],
  foodLog: JSON.parse(localStorage.getItem("nutriplan_foodlog")) || [],

  saveFavorites() {
    localStorage.setItem("nutriplan_favorites", JSON.stringify(this.favorites));
  },

  saveFoodLog() {
    localStorage.setItem("nutriplan_foodlog", JSON.stringify(this.foodLog));
  },
};
