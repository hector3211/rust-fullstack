import { Movie } from "@/typings";
import MoviePoster from "./components/poster";

export async function fetchFromActix() {
  const res = await fetch(`${process.env.SERVER_URL}/getmovies`, {
    next: { revalidate: 5 },
  });
  if (!res.ok) {
    throw new Error("Error fetching data from server");
  }

  const allMovies: Movie[] = await res.json();
  return allMovies;
}

export default async function GetMovies() {
  const movies = await fetchFromActix();

  return (
    <div className="flex flex-wrap justify-center items-center pt-10 md:justify-center md:items-center lg:justify-start lg:items-start lg:mx-16">
      {movies.map((movie) => (
        <div key={movie.id}>
          {/* @ts-expect-error Server Component */}
          <MoviePoster
            title={movie.title}
            id={movie.id}
            rating={movie.rating}
          />
        </div>
      ))}
    </div>
  );
}

export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/getmovies`);
  if (!res) {
    throw new Error("Error fetching data from server");
  }
  const allMovies: Movie[] = await res.json();
  return allMovies.map((movie) => ({
    movietitle: movie.title.toString(),
  }));
}
