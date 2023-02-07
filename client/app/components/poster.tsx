import { Poster } from "@/typings";
import Link from "next/link";
import DeleteButton from "./deletebutton";

type PosterProps = {
  title: string;
  id: number;
  rating: number;
};

// type Token = {
//   userRole: string;
// };

async function fetchPoster(title: string) {
  const res = await fetch(
    `http://www.omdbapi.com/?t=${title}&apikey=${process.env.POSTER_API_KEY}`
  );
  if (!res.ok) {
    console.log("Problem fetching posters");
  }
  const data: Poster = await res.json();
  return data;
}

export default async function MoviePoster({ title, id, rating }: PosterProps) {
  const poster = await fetchPoster(title);
  if (!poster) {
    return (
      <div className="flex flex-wrap justify-evenly items-center pt-10">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <Link href={`/movies/${poster.Title}`}>
        <img
          src={poster.Poster}
          alt={` poster for ${title}`}
          className="h-60 object-fill border-2 border-teal-500 rounded-md"
        />
      </Link>
      <div className="flex justify-between items-start py-1">
        <p>⭐{poster.imdbRating}</p>
        <DeleteButton id={id} />
      </div>
    </div>
  );
}
