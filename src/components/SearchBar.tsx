type Props = {
  search: string;
  setSearch: (value: string) => void;
};

export default function SearchBar({ search, setSearch }: Props) {
  return (
    <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search recipes..."
      className="w-full max-w-xl mx-auto block p-3 mb-6 rounded-xl border focus:ring-2 focus:ring-blue-500"
    />
  );
}