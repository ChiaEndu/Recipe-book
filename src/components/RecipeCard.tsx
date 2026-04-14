import { Link } from "react-router-dom";
import type { Recipe } from "../services/api";

type Props = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: Props) {
  return (
    <Link to={`/recipe/${recipe.idMeal}`}>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition">
        <img
          src={recipe.strMealThumb}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="font-semibold">{recipe.strMeal}</h3>
          <p className="text-sm text-gray-500">
            {recipe.strCategory || "Category"}
          </p>
        </div>
      </div>
    </Link>
  );
}