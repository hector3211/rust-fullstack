import { Poster, Tmdb, Video } from "@/typings";
import Link from "next/link";
import Ytvideo from "../../components/youtube";

type PageProps = {
  params: {
    movietitle: string;
  };
};
async function fetchVideoId(id: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.MOVIE_API_KEY}`
  );
  if (!res.ok) {
    console.log("Error fetching TMdb data");
  }
  const data: Video = await res.json();
  return data;
}

async function fetchTmdbData(title: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${title}`
  );
  if (!res.ok) {
    console.log("Error fetching TMdb data");
  }
  const data: Tmdb = await res.json();
  return data;
}

async function fetchMovieData(title: string) {
  const res = await fetch(
    `http://www.omdbapi.com/?t=${title}&apikey=${process.env.POSTER_API_KEY}`
  );
  if (!res.ok) {
    console.log("Error fetching omdb data");
  }
  const data: Poster = await res.json();
  return data;
}
export default async function MoviePage({ params: { movietitle } }: PageProps) {
  const movieData = await fetchMovieData(movietitle);
  const tmdbData = await fetchTmdbData(movieData.Title);
  const videoInfo = await fetchVideoId(tmdbData?.results[0]?.id);

  return (
    <div className="relative">
      <div className="flex flex-col justify-center items-center">
        <Ytvideo results={videoInfo?.results} />
        <div className="md:flex md:justify-around md:items-center md:pt-10">
          <img
            src={movieData?.Poster}
            alt={"poster for ${movieTitle}"}
            className="md:mx-0 object-fill mx-auto border-2 border-teal-500 rounded-md drop-shadow-2xl"
          />
          <div className="px-3 md:w-1/2 text-2xl">
            <div className="py-2 md:flex md:items-end">
              <h1 className="pr-2">Title:</h1>
              <p className="text-lg">{movieData.Title}</p>
            </div>
            <div className="py-2 md:flex md:items-end">
              <h1 className="pr-2">Genre: </h1>
              <p className="text-lg">{movieData.Genre}</p>
            </div>
            <div className="py-2">
              <h1 className="">Runtime: </h1>
              <p className="text-lg">{movieData.Runtime}</p>
            </div>
            <div className="py-2">
              <h1 className="">Awards: </h1>
              <p className="text-lg">{movieData.Awards}</p>
            </div>
            <div className="py-2">
              <h1 className="">Featured Actors: </h1>
              <p className="text-lg">{movieData.Actors}</p>
            </div>
            <div className="py-2">
              <h1 className="">Description: </h1>
              <p className="text-lg">{movieData.Plot}</p>
            </div>

            <div className="py-2">
              <h1 className="">Rating: </h1>
              <p className="text-lg">{movieData.imdbRating}</p>
            </div>
          </div>
        </div>
        <Link
          href={`https://youtube.com/results?search_query=${movietitle}`}
          target="_blank"
          className="relative bottom-0 text-xl btn btn-success w-1/2"
        >
          Tailer
        </Link>
      </div>
    </div>
  );
}
