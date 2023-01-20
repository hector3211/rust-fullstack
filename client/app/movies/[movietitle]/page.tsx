import { Poster, Tmdb, Video } from "@/typings";
import Link from "next/link";
import Ytvideo from "../../../components/YouTube";

type PageProps = {
  params: {
    movietitle: string;
  };
};
async function fetchVideoId(id: number) {
  console.log(`Youtube id : ${id}`);
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.NEXT_PUBLIC_MOVIE}`
  );
  const data: Video = await res.json();
  console.log(`key is ${data?.results[0]?.key}`);
  return data;
}

async function fetchTmdbData(title: string) {
  console.log(`Title: ${title}`);
  const res = await fetch(
    // `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_MOVIE}&query=${updated_title}`
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_MOVIE}&query=${title}`
  );
  if (!res) {
    console.log("Error fetching TMdb data");
  }
  const data: Tmdb = await res.json();
  return data;
}

async function fetchMovieData(title: string) {
  const res = await fetch(
    `http://www.omdbapi.com/?t=${title}&apikey=${process.env.NEXT_PUBLIC_POSTER_API_KEY}`
  );
  if (!res) {
    console.log("Error fetching omdb data");
  }
  const data: Poster = await res.json();
  return data;
}
export default async function MoviePage({ params: { movietitle } }: PageProps) {
  const movieData = await fetchMovieData(movietitle);
  const tmdbData = await fetchTmdbData(movieData.Title);
  const videoInfo = await fetchVideoId(tmdbData?.results[0]?.id);
  const firstVideo = videoInfo?.results[0]?.key;

  // console.log(movieData);
  // console.log(tmdbData?.results[0]?.id);
  console.log(`data recieved from video search ${firstVideo}`);
  // const firstVideo = videoInfo?.results[0]?.key;
  return (
    <div className="flex flex-col items-center my-10">
      <div className="flex justify-around items-center">
        <img
          src={movieData?.Poster}
          alt={"poster for ${movieTitle}"}
          className="object-fill border border-teal-500 rounded-md"
        />
        <div className="w-1/2 text-2xl">
          <div className="flex items-end">
            <h1 className="pr-2">Title:</h1>
            <p className="text-lg">{movieData.Title}</p>
          </div>
          <div className="flex items-end">
            <h1 className="pr-2">Genre: </h1>
            <p className="text-lg">{movieData.Genre}</p>
          </div>
          <div className="py-2">
            <h1 className="">Description: </h1>
            <p className="text-lg">{movieData.Plot}</p>
          </div>
        </div>
      </div>
      <div>
        <Ytvideo key={`${firstVideo}`} />
      </div>
      <footer className="absolute bottom-0 pb-10">
        <Link href={"/"} className="btn btn-primary">
          Go Home
        </Link>
      </footer>
    </div>
  );
}
