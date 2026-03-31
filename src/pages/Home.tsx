import { useEffect, useState } from "react";
import { fetchRecipes, Recipe } from "../services/api";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const data = await fetchRecipes(search);
      setRecipes(data);
      setLoading(false);
    };

    load();
  }, [search]);

  return (
    <div className="p-6">
      <SearchBar search={search} setSearch={setSearch} />

      {loading && <Loader />}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((r) => (
          <RecipeCard key={r.idMeal} recipe={r} />
        ))}
      </div>
    </div>
  );
}