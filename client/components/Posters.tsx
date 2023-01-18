"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Poster } from "@/typings";
import { useRouter } from "next/navigation";
import Link from "next/link";

type MovieTitle = {
  title: string;
  id: number;
};

export default function MoviePoster({ title, id }: MovieTitle) {
  const router = useRouter();
  const [posterUrl, setPosterUrl] = useState<Poster>();
  const [responseStatus, setResponseStatus] = useState<number>();

  function handleDelete() {
    axios
      .delete(`${process.env.NEXT_PUBLIC_URL}/delete/${id}`)
      .then((res) => {
        setResponseStatus(res.status);
      })
      .catch((error) => console.log(error));
    // router.push("https://localhost:3000/api/revalidate?secret=revalidate");
  }
  if (responseStatus === 200) {
    window.location.reload();
  }

  useEffect(() => {
    axios
      .get(
        `http://www.omdbapi.com/?t=${title}&apikey=${process.env.NEXT_PUBLIC_POSTER_API_KEY}`
      )
      .then((res) => setPosterUrl(res.data))
      .catch((error) => console.log(error));
  }, [title]);

  if (!posterUrl) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link href={`/movies/${posterUrl.Title}`}>
        <img
          src={posterUrl.Poster}
          alt={"poster for ${movieTitle}"}
          className="h-full object-fill border border-teal-500 rounded-md"
        />
      </Link>
      <div className="flex justify-between items-start py-1">
        <p>⭐{posterUrl.imdbRating}</p>
        <button
          onClick={handleDelete}
          className="btn btn-sm btn-ghost hover:btn-error"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
