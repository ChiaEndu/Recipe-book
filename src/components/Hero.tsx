import type { Dispatch, SetStateAction } from "react";

type HeroProps = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

export default function Hero({ search, setSearch }: HeroProps) {
  return (
    <div className="px-6 py-12 bg-[#f8f6f2]">
      
      <p className="text-green-600 text-xs font-semibold mb-4">
        CURATED FLAVORS
      </p>

    
      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        What are we{" "}
        <span className="text-yellow-600 italic">crafting</span> today?
      </h1>

      <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden max-w-xl">
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Find ingredients, cuisines, or chefs..."
          className="flex-1 px-4 py-3 outline-none"
        />

        <button className="bg-yellow-600 text-white px-6 py-3 rounded-full m-1">
          Explore
        </button>
      </div>
    </div>
  );
}