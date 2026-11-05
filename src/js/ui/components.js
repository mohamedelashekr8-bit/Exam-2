export function renderCategories(categories, container) {
  if (!container) return;

  container.innerHTML = categories
    .map(
      (cat) => `
    <div class="category-card bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-3 border border-emerald-200 hover:border-emerald-400 hover:shadow-md cursor-pointer transition-all group" data-category="${cat.strCategory}">
      <div class="flex items-center gap-2.5">
        <div class="text-white w-9 h-9 bg-gradient-to-br from-emerald-400 to-green-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
          <i class="fa-solid fa-utensils"></i>
        </div>
        <div>
          <h3 class="text-sm font-bold text-gray-900">${cat.strCategory}</h3>
        </div>
      </div>
    </div>
  `,
    )
    .join("");
}

export function renderRecipes(meals, container) {
  if (!container) return;

  if (!meals || meals.length === 0) {
    container.innerHTML = `
      <div class="col-span-full flex flex-col items-center justify-center py-12 text-center">
          <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <i class="fa-solid fa-search text-gray-400 text-2xl"></i>
          </div>
          <p class="text-gray-500 text-lg">No recipes found</p>
          <p class="text-gray-400 text-sm mt-2">Try searching for something else</p>
      </div>
    `;
    return;
  }

  container.innerHTML = meals
    .map(
      (meal) => `
    <div class="recipe-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group" data-meal-id="${meal.idMeal}">
      <div class="relative h-48 overflow-hidden">
        <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="${meal.strMealThumb}" alt="${meal.strMeal}" loading="lazy"/>
        <div class="absolute bottom-3 left-3 flex gap-2">
          ${meal.strCategory ? `<span class="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-full text-gray-700">${meal.strCategory}</span>` : ""}
          ${meal.strArea ? `<span class="px-2 py-1 bg-emerald-500 text-xs font-semibold rounded-full text-white">${meal.strArea}</span>` : ""}
        </div>
      </div>
      <div class="p-4">
        <h3 class="text-base font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors line-clamp-1">${meal.strMeal}</h3>
        <p class="text-xs text-gray-600 mb-3 line-clamp-2">Delicious recipe to try!</p>
        <div class="flex items-center justify-between text-xs">
          <span class="font-semibold text-gray-900">
            <i class="fa-solid fa-utensils text-emerald-600 mr-1"></i> ${meal.strCategory || "General"}
          </span>
          <span class="font-semibold text-gray-500">
            <i class="fa-solid fa-globe text-blue-500 mr-1"></i> ${meal.strArea || "Global"}
          </span>
        </div>
      </div>
    </div>
  `,
    )
    .join("");
}

export function toggleLoading(show) {
  const overlay = document.getElementById("app-loading-overlay");
  if (overlay) {
    if (show) {
      overlay.classList.remove("loading");
      overlay.style.opacity = "1";
      overlay.style.display = "flex";
    } else {
      overlay.style.opacity = "0";
      setTimeout(() => {
        overlay.style.display = "none";
        overlay.classList.add("loading");
      }, 500);
    }
  }
}
