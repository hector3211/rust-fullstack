import { Movie } from "@/typings";

const url = "http://localhost:8080/getmovies";

async function fetchMoives() {
  const res = await fetch(url);
  if (!res) {
    throw new Error("Error fetching data from server");
  }

  const allMovies: Movie[] = await res.json();
  return allMovies;
}

function getCoverMovie(movieTitle: string): string {
  console.log(process.env.NEXT_PUBLIC_POSTER_API_KEY);
  console.log(movieTitle);
  return "an img";
}

async function GetMovies() {
  const movies = await fetchMoives();
  return (
    <div className="flex">
      {movies.map((movie) => (
        <div key={movie.id} className="px-5">
          <h3>{movie.title}</h3>
          <h3>{movie.cover}</h3>
          <h3>{movie.rating}</h3>
          <img src={getCoverMovie(movie.title)} alt="will be my poster" />
        </div>
      ))}
    </div>
  );
}

export default GetMovies;
