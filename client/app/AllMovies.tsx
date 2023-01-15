import { Movie, Poster } from "@/typings";

const url = "http://localhost:8080/getmovies";

async function fetchMoives() {
  const res = await fetch(url);
  if (!res) {
    throw new Error("Error fetching data from server");
  }

  const allMovies: Movie[] = await res.json();
  return allMovies;
}

async function getCoverMovie(title: string) {
  const res = await fetch(
    `http://www.omdbapi.com/?t=${title}&apikey=${process.env.NEXT_PUBLIC_POSTER_API_KEY}`
  );
  if (!res) {
    throw new Error("Error fetching poster data");
  }
  const poster: Poster = await res.json();
  return poster;
}

export default async function GetMovies() {
  const movies = await fetchMoives();
  const poster = await getCoverMovie("matrix reloaded");
  if (!movies) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex">
      {movies.map((movie) => (
        <div key={movie.id} className="px-5">
          <h3>{movie.title}</h3>
          <h3>{movie.cover}</h3>
          <img src={poster.Poster} alt="movie poster" className="object-fill" />
          <h3>{movie.rating}</h3>
        </div>
      ))}
    </div>
  );
}
