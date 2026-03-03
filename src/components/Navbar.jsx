export default function navbar() {
  return (
    <nav className="fixed w-full z-50 bg-linear-to-b from-black via-black/70 to-transparent p-5 flex justify-between items-center">
      <h1 className="text-red-600 text-3xl font-bold cursor-pointer">
        NETFLIX
      </h1>

      <div className="flex items-center gap-6">
        <span className="cursor-pointer hover:text-red-500">Home</span>
        <span className="cursor-pointer hover:text-red-500">TV Shows</span>
        <span className="cursor-pointer hover:text-red-500">Movies</span>
        <div className="w-8 h-8 bg-gray-600 rounded-full cursor-pointer"></div>
      </div>
    </nav>
  );
}