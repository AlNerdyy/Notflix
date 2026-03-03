import { useNavigate } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

export default function MovieGrid({ movies, title = "Popular on Netflix" }) {
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites();

  const list = movies ?? [];

  return (
    <div className="px-10 py-16 bg-black">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {list.map((movie) => (
          <div
            key={movie.id}
            className="relative group overflow-hidden rounded-lg transform hover:scale-105 transition duration-300 bg-black cursor-pointer"
            onClick={() => navigate(`/details/${movie.id}`)}
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-full object-cover"
            />

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(movie.id);
              }}
              className={`absolute top-2 right-2 rounded-full px-2 py-1 text-xs font-semibold transition ${
                isFavorite(movie.id)
                  ? "bg-red-600 text-white"
                  : "bg-black/70 text-gray-200 hover:bg-red-600"
              }`}
            >
              {isFavorite(movie.id) ? "♥" : "♡"}
            </button>

            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex items-end p-4 transition">
              <p className="text-sm font-semibold">{movie.title}</p>
            </div>
          </div>
        ))}

        {list.length === 0 && (
          <p className="col-span-full text-gray-400">
            No titles match your filters.
          </p>
        )}
      </div>
    </div>
  );
}