import { Poster, Tmdb, Video } from "@/typings";
import Link from "next/link";
import Ytvideo from "../../components/youtube";

type PageProps = {
  params: {
    movietitle: string;
  };
};
// async function fetchVideoId(id: number) {
//   const res = await fetch(
//     `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.MOVIE_API_KEY}`
//   );
//   if (!res.ok) {
//     console.log("Error fetching TMdb data");
//   }
//   const data: Video = await res.json();
//   return data;
// }
//
// async function fetchTmdbData(title: string) {
//   const res = await fetch(
//     `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${title}`
//   );
//   if (!res.ok) {
//     console.log("Error fetching TMdb data");
//   }
//   const data: Tmdb = await res.json();
//   return data;
// }

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
  // const tmdbData = await fetchTmdbData(movieData.Title);
  // const videoInfo = await fetchVideoId(tmdbData?.results[0]?.id);

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="card w-5/6 mx-1 glass md:card-side md:mx-2 md:w-fit lg:w-fit">
        <figure>
          <img
            src={movieData?.Poster}
            alt={"poster for ${movieTitle}"}
            className="object-cover rounded-md drop-shadow-2xl mt-5 md:mt-0 md:h-full"
          />
        </figure>
        <div className="card-body text-2xl md:w-1/2">
          <h2 className="card-title md:text-2xl">{movieData.Title}</h2>
          <h3>{movieData.Actors}</h3>
          <p className="flex flex-wrap">{movieData.Plot}</p>
          <p>{movieData.Awards}</p>
          <p>⭐{movieData.imdbRating}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <Link
                href={`https://youtube.com/results?search_query=${movieData.Title}`}
                target="_blank"
              >
                Trailer
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
