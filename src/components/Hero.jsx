import movies from "../data/movies";

export default function hero() {
  const featured = movies[0];

  return (
    <div
      className="h-[80vh] bg-cover bg-center flex items-end p-10"
      style={{ backgroundImage: `url(${featured.banner})` }}
    >
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold mb-4">{featured.title}</h1>
        <p className="text-gray-300 mb-6">{featured.description}</p>
        <div className="flex gap-4">
          <button className="bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-300">
            ▶ Play
          </button>
          <button className="bg-gray-700 px-6 py-2 rounded font-semibold hover:bg-gray-600">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}