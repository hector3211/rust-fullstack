import { Poster, Tmdb, Video } from "@/typings";
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
    // `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_MOVIE}&query=${updated_title}`
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
  const firstVideo = videoInfo?.results[1]?.key;

  return (
    <div className="flex flex-col items-center">
      <Ytvideo videoId={firstVideo} />
      <div className="flex justify-around items-center pt-10">
        <img
          src={movieData?.Poster}
          alt={"poster for ${movieTitle}"}
          className="object-fill border-2 border-teal-500 rounded-md drop-shadow-2xl"
        />
        <div className="w-1/2 text-2xl">
          <div className="py-2 flex items-end">
            <h1 className="pr-2">Title:</h1>
            <p className="text-lg">{movieData.Title}</p>
          </div>
          <div className="py-2 flex items-end">
            <h1 className="pr-2">Genre: </h1>
            <p className="text-lg">{movieData.Genre}</p>
          </div>
          <div className="py-2">
            <h1 className="">Description: </h1>
            <p className="text-lg">{movieData.Plot}</p>
          </div>
          <div className="py-2">
            <h1 className="">Featured Actors: </h1>
            <p className="text-lg">{movieData.Actors}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
