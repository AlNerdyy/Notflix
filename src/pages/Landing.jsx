import { useMemo, useState } from "react";
import Hero from "../components/Hero";
import MovieGrid from "../components/MovieGrid";
import movies from "../data/movies";
import { useFavorites } from "../context/FavoritesContext";

const CATEGORIES = [
  "All",
  "Trending",
  "Top Rated",
  "Action",
  "Comedy",
  "Favorites",
];

export default function Landing() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const { favorites } = useFavorites();

  const filteredMovies = useMemo(() => {
    const term = search.trim().toLowerCase();

    return movies.filter((movie) => {
      const isFavoriteMovie = favorites.includes(movie.id);

      const matchesCategory =
        selectedCategory === "All"
          ? true
          : selectedCategory === "Favorites"
          ? isFavoriteMovie
          : movie.category === selectedCategory;

      const matchesSearch =
        term === "" || movie.title.toLowerCase().includes(term);

      return matchesCategory && matchesSearch;
    });
  }, [favorites, search, selectedCategory]);

  return (
    <div className="bg-black text-white min-h-screen">
      <header className="flex items-center justify-between px-10 py-4 bg-linear-to-b from-black/80 to-transparent absolute top-0 left-0 right-0 z-10">
        <div className="text-2xl font-extrabold text-red-600 tracking-wide">
          NOTFLIX
        </div>
        <nav className="flex gap-6 text-sm text-gray-200">
          <button className="hover:text-white">Home</button>
          <button className="hover:text-white">Series</button>
          <button className="hover:text-white">Films</button>
          <button className="hover:text-white">My List</button>
        </nav>
      </header>

      <main>
        <Hero />

        <section className="px-10 pt-6 pb-2 bg-black flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full text-sm border transition ${
                  selectedCategory === cat
                    ? "bg-red-600 border-red-600"
                    : "border-gray-600 text-gray-300 hover:border-red-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="w-full md:w-64">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search titles..."
              className="w-full bg-gray-900/80 border border-gray-700 rounded px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:border-red-500"
            />
          </div>
        </section>

        <MovieGrid movies={filteredMovies} title="Browse Titles" />
      </main>
    </div>
  );
}