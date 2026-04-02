type Props = {
  selected: string;
  setSelected: (value: string) => void;
};

const categories = [
  "All",
  "Seafood",
  "Dessert",
  "Vegetarian",
  "Beef",
  "Chicken",
  "Pasta",
];

export default function CategoryFilter({ selected, setSelected }: Props) {
  return (
    <div className="mb-6">
      <h2 className="font-semibold mb-3">Categories</h2>

      <div className="flex gap-3 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition
              ${
                selected === cat
                  ? "bg-green-400 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}