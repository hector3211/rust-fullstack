import { Movie, Poster } from "@/typings";
import MoviePoster from "./components/Posters";

const url = "http://localhost:8080/getmovies";

async function fetchMoives() {
  const res = await fetch(url);
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
    <div className="flex">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="px-5 flex flex-col justify-center items-center"
        >
          <MoviePoster title={movie.title} />
        </div>
      ))}
      {}
    </div>
  );
}
