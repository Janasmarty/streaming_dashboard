"use client";

import Link from "next/link";
import Image from "next/image";
import { Movie } from "@/types/movie";

export default function MovieRow({
  movies,
  categoryTitle,
}: {
  movies: Movie[];
  categoryTitle: string;
}) {
  return (
    <section className="p-4">
      <h2 className="text-xl font-semibold mb-3">{categoryTitle}</h2>

      <div className="flex gap-3 overflow-x-auto">
        {movies.map((m) => (
          <Link key={m.imdbID} href={`/movie/${m.imdbID}`}>
            <Image
              src={m.Poster}
              alt={m.Title}
              width={160}
              height={240}
              className="rounded-lg"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
