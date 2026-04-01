import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <Link to="/" className="font-bold text-lg">
        Recipe Explorer
      </Link>

      <Link to="/favorites" className="text-blue-500">
        Favorites
      </Link>
    </nav>
  );
}