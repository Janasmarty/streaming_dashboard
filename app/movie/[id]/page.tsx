import Image from "next/image";

const API_KEY = "da99cea7";

async function getMovie(id: string) {
  const res = await fetch(
    `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`,
    { cache: "no-store" }
  );

  try {
    return await res.json();
  } catch (err) {
    console.error("JSON parse failed:", err);
    return null;
  }
}

export default async function MoviePage(props: { params: Promise<{ id: string }> }) {
  // ⬅️ THIS IS THE IMPORTANT FIX
  const { id } = await props.params;

  const movie = await getMovie(id);

  if (!movie || movie.Response === "False") {
    return (
      <main className="p-6">
        <h1 className="text-2xl font-bold">Movie not found</h1>
      </main>
    );
  }

  const poster =
    movie.Poster && movie.Poster !== "N/A"
      ? movie.Poster
      : "/fallback.jpg";

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">{movie.Title}</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <Image
          src={poster}
          alt={movie.Title}
          width={350}
          height={500}
          className="rounded-lg shadow"
          unoptimized
        />

        <div className="text-lg space-y-3">
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Runtime:</strong> {movie.Runtime}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
        </div>
      </div>
    </main>
  );
}
