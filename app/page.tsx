import Link from "next/link";
import SafeImage from "./components/SafeImage";

const API_KEY = process.env.OMDB_KEY!;

async function getMovies() {
  const res = await fetch(
    `https://www.omdbapi.com/?s=avengers&apikey=${API_KEY}`
  );

  return res.json();
}

export default async function HomePage() {
  const data = await getMovies();
  const movies = data.Search || [];

  return (
    <main className="p-5">
      <h1 className="text-3xl font-bold mb-5">Movie Dashboard</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {movies.map((movie: any) => (
          <Link key={movie.imdbID} href={`/movie/${movie.imdbID}`}>
            <div className="border rounded p-3 hover:scale-105 transition cursor-pointer">
              
              {/* 🔥 Using SafeImage instead of <Image /> */}
              <SafeImage
                src={movie.Poster !== "N/A" ? movie.Poster : "/fallback.jpg"}
                alt={movie.Title}
                width={300}
                height={450}
                className="rounded"
              />

              <h2 className="font-semibold mt-2">{movie.Title}</h2>
              <p className="text-sm">{movie.Year}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
