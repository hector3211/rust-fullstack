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

async function getCoverMovie(movieTitle: string) {
  const res = await fetch(
    `http://www.omdbapi.com/?t=${movieTitle}&apikey=${process.env.NEXT_PUBLIC_POSTER_API_KEY}`
  );
  if (!res) {
    // console.log("Error fetching poster data man!");
    throw new Error("Error fetching poster data");
  }
  const poster: Poster = await res.json();
  // console.log(poster);
  return poster;
  // console.log(process.env.NEXT_PUBLIC_POSTER_API_KEY);
  // console.log(movieTitle);
  // return "an img";
}

export default async function GetMovies() {
  const movies = await fetchMoives();
  const poster = await getCoverMovie("matrix reloaded");

  return (
    <div className="flex">
      {movies.map((movie) => (
        <div key={movie.id} className="px-5">
          <h3>{movie.title}</h3>
          <h3>{movie.cover}</h3>
          <img
            src={poster.Poster}
            alt={"cover photo"}
            className="h-full w-ful object-full"
          />
          <h3>{movie.rating}</h3>
        </div>
      ))}
    </div>
  );
}
