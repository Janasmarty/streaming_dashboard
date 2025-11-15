import Image from "next/image";
import { Movie } from "@/types/movie";

export default function HeroBanner({ movie }: { movie: Movie }) {
  return (
    <section className="relative h-80 md:h-96">
      <Image
        src={movie.Poster !== "N/A" ? movie.Poster : "/fallback.jpg"}
        alt={movie.Title}
        fill
        priority
        className="object-cover"
      />
      
      <div className="absolute bottom-6 left-6 text-xl font-bold text-white drop-shadow-xl">
        {movie.Title}
      </div>
    </section>
  );
}
