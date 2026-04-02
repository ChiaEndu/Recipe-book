import { useEffect, useState } from "react";
import { type Recipe } from "../services/api";
import RecipeCard from "../components/RecipeCard";

export default function Favorite() {
  const [favorites, setFavorites] = useState<Recipe[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(data);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Favorites</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {favorites.map((r) => (
          <RecipeCard key={r.idMeal} recipe={r} />
        ))}
      </div>
    </div>
  );
}