import { useParams, useNavigate } from "react-router-dom";
import movies from "../data/movies";
import { useFavorites } from "../context/FavoritesContext";

export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites();

  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl mb-4">Movie not found</h1>
        <button
          onClick={() => navigate("/")}
          className="bg-red-600 px-6 py-2 rounded hover:bg-red-700"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div
        className="h-[70vh] bg-cover bg-center flex items-end p-10 relative"
        style={{ backgroundImage: `url(${movie.banner})` }}
      >
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
        <div className="relative max-w-4xl flex flex-col md:flex-row gap-8">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-40 md:w-56 rounded-lg shadow-lg object-cover"
          />
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {movie.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-4">
              {movie.year && <span className="font-semibold">{movie.year}</span>}
              {movie.rating && (
                <span className="px-2 py-1 rounded bg-white/20">
                  ⭐ {movie.rating.toFixed(1)}
                </span>
              )}
              {movie.category && (
                <span className="uppercase tracking-wide text-xs bg-red-600 px-2 py-1 rounded">
                  {movie.category}
                </span>
              )}
            </div>

            <p className="text-gray-200 mb-6">{movie.description}</p>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => toggleFavorite(movie.id)}
                className={`px-6 py-2 rounded font-semibold transition ${
                  isFavorite(movie.id)
                    ? "bg-white text-black"
                    : "bg-white/20 text-white hover:bg-white/40"
                }`}
              >
                {isFavorite(movie.id) ? "★ In Favorites" : "☆ Add to Favorites"}
              </button>

              <button
                onClick={() => navigate("/")}
                className="bg-red-600 px-6 py-2 rounded hover:bg-red-700 font-semibold"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}