import Image from "next/image";
import { Movie } from "@/types/movie";

export default function HeroBanner({ movie }: { movie: Movie }) {
  return (
    <section className="relative h-80 md:h-96">
      <Image
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        fill
        priority
        className="object-cover"
      />
      <div className="absolute bottom-6 left-6 text-xl font-bold drop-shadow-xl">
        {movie.title}
      </div>
    </section>
  );
}
