import { useEffect, useState } from "react";
import { fetchByCategory, fetchRecipes } from "../services/api";
import type { Recipe } from "../services/api";
import RecipeCard from "../components/RecipeCard";
import Hero from "../components/Hero";
import Loader from "../components/Loader";
import CategoryFilter from "../components/CategoryFilter";

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("All");

  useEffect(() => {
  const load = async () => {
    setLoading(true);

    let data = [];

    if (category !== "All") {
      data = await fetchByCategory(category);
    } else {
      data = await fetchRecipes(search);
    }

    setRecipes(data);
    setLoading(false);
  };

  load();
}, [search, category]);
return (
  <div>
    <Hero search={search} setSearch={setSearch} />

    <div className="p-6 space-y-6">
      <CategoryFilter selected={category} setSelected={setCategory} />

      {loading && <Loader />}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  </div>
);
}