import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();

  return (
    <nav className="bg-white border-b px-6 py-4 flex items-center justify-between">
    
      <div className="flex items-center gap-8">
        <h1 className="text-xl font-bold">Saffron & Sage</h1>

        <div className="flex gap-6 text-sm font-medium">
          <Link
            to="/"
            className={`${
              location.pathname === "/"
                ? "text-yellow-600 border-b-2 border-yellow-600"
                : "text-gray-500"
            }`}
          >
            Home
          </Link>

          <Link
            to="/favorites"
            className={`${
              location.pathname === "/favorites"
                ? "text-yellow-600 border-b-2 border-yellow-600"
                : "text-gray-500"
            }`}
          >
            Favorites
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <input
          placeholder="Search recipes..."
          className="bg-gray-100 px-4 py-2 rounded-full text-sm focus:outline-none"
        />

        <span>❤️</span>
        <span>👤</span>
      </div>
    </nav>
  );
}