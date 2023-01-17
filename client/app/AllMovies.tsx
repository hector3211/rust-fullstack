import { Movie } from "@/typings";
import Link from "next/link";
import MoviePoster from "./components/Posters";

async function fetchMoives() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/getmovies`, {
    next: { revalidate: 10 },
  });
  if (!res) {
    throw new Error("Error fetching data from server");
  }

  const allMovies: Movie[] = await res.json();
  return allMovies;
}

export default async function GetMovies() {
  const movies = await fetchMoives();

  if (!movies) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-full flex-wrap overflow-hidden pt-5">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="basis-4/12 px-5 flex flex-col justify-center items-center"
        >
          <Link href={`/movies/${movie.title}`}>
            <MoviePoster title={movie.title} />
          </Link>
        </div>
      ))}
    </div>
  );
}
