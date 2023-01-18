import { fetchFromActix } from "@/lib/MovieData";
import { Movie } from "@/typings";
import MoviePoster from "../components/Posters";

export default async function GetMovies() {
  const movies = await fetchFromActix();

  if (!movies) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-wrap justify-evenly items-center pt-10">
      {movies.map((movie) => (
        <div key={movie.id} className="basis-60 py-2">
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/getmovies`, {
    next: { revalidate: 10 },
  });
  if (!res) {
    throw new Error("Error fetching data from server");
  }
  const allMovies: Movie[] = await res.json();
  return allMovies.map((movie) => ({
    movietitle: movie.title.toString(),
  }));
}
