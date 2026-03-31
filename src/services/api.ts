export interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory?: string;
  strInstructions?: string;
  [key: string]: any;
}

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const fetchRecipes = async (query = ""): Promise<Recipe[]> => {
  const res = await fetch(`${BASE_URL}/search.php?s=${query}`);
  const data = await res.json();
  return data.meals || [];
};

export const fetchRecipeDetails = async (
  id: string
): Promise<Recipe | null> => {
  const res = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
  const data = await res.json();
  return data.meals?.[0] || null;
};