const BASE_URL = "https://www.themealdb.com/api/json/v1/1/";

export async function fetchCategories() {
  try {
    const response = await fetch(`${BASE_URL}categories.php`);
    const data = await response.json();
    return data.categories || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export async function searchMeals(query = "") {
  try {
    const response = await fetch(`${BASE_URL}search.php?s=${query}`);
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error searching meals:", error);
    return [];
  }
}

export async function filterByCategory(category) {
  try {
    const response = await fetch(`${BASE_URL}filter.php?c=${category}`);
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error filtering meals:", error);
    return [];
  }
}

export async function fetchMealDetails(id) {
  try {
    const response = await fetch(`${BASE_URL}lookup.php?i=${id}`);
    const data = await response.json();
    return data.meals ? data.meals[0] : null;
  } catch (error) {
    console.error("Error fetching meal details:", error);
    return null;
  }
}
