"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Poster, Movie } from "@/typings";

type MovieTitle = {
  title: string;
};

export default function MoviePoster({ title }: MovieTitle) {
  const [posterUrl, setPosterUrl] = useState<Poster | null>(null);

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
    <img
      src={posterUrl.Poster}
      alt={"poster for ${movieTitle}"}
      className="object-fill border border-teal-500 rounded-md"
    />
  );
}
