import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchRecipeDetails,type Recipe } from "../services/api";

export default function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    if (id) fetchRecipeDetails(id).then(setRecipe);
  }, [id]);

  if (!recipe) return <p className="text-center mt-10">Loading...</p>;

  const ingredients: string[] = [];
  for (let i = 1; i <= 20; i++) {
    const item = recipe[`strIngredient${i}`];
    if (item) ingredients.push(item);
  }

  const preparationSteps = recipe.strInstructions
    ?.split(/\r?\n/)
    .map((step) => step.trim())
    .filter(Boolean) ?? [];

  return (
    <div className="bg-[#f8f6f2] min-h-screen">
    
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 bg-white px-4 py-2 rounded-full shadow"
      >
        ← Back
      </button>

      <div className="max-w-4xl mx-auto h-[62] overflow-hidden rounded-xl">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-full object-cover"
          width={400}
          height={300}
        />
      </div>

      <div className="max-w-5xl mx-auto mt-6 bg-white ...">
        
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          {recipe.strMeal}
        </h1>

        <p className="text-gray-500 mb-6">
          A delicious recipe you’ll love. Fresh ingredients and simple steps.
        </p>

        <div className="flex gap-6 mb-8 text-sm text-gray-600">
          <span>420 kcal</span>
          <span>34g protein</span>
          <span>12g fat</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          <div>
            <h3 className="font-semibold mb-4">Ingredients</h3>
            <ul className="space-y-2 text-gray-700">
              {ingredients.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Preparation Steps</h3>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              {preparationSteps.length > 0 ? (
                preparationSteps.map((step, index) => (
                  <p key={index}>{step}</p>
                ))
              ) : (
                <p>No preparation steps available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}