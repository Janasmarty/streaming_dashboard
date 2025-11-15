const BASE = "http://www.omdbapi.com/";
const API_KEY = process.env.OMDB_API_KEY;

// Search movies (example: "Avengers")
export async function searchMovies(query: string) {
  const res = await fetch(`${BASE}?s=${query}&apikey=${API_KEY}`);

  if (!res.ok) throw new Error("Failed to fetch movies");

  return res.json();
}

// Fetch movie by ID (example: tt3896198)
export async function fetchMovieById(id: string) {
  const res = await fetch(`${BASE}?i=${id}&apikey=${API_KEY}`);

  if (!res.ok) throw new Error("Failed to fetch movie details");

  return res.json();
}
