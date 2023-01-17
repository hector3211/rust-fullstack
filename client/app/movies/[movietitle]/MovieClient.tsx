"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Poster } from "@/typings";

type PageProps = {
  params: {
    movietitle: string;
  };
};

export default function Movie({ params: { movietitle } }: PageProps) {
  const [posterUrl, setPosterUrl] = useState<Poster>();

  useEffect(() => {
    axios
      .get(
        `http://www.omdbapi.com/?t=${movietitle}&apikey=${process.env.NEXT_PUBLIC_POSTER_API_KEY}`
      )
      .then((res) => setPosterUrl(res.data))
      .catch((error) => console.log(error));
  }, [movietitle]);

  if (!posterUrl) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex justify-around items-center">
      <img
        src={posterUrl?.Poster}
        alt={"poster for ${movieTitle}"}
        className="object-fill border border-teal-500 rounded-md"
      />
      <div className="w-1/2 text-2xl">
        <div className="flex items-end">
          <h1 className="pr-2">Title:</h1>
          <p className="text-lg">{posterUrl.Title}</p>
        </div>
        <div className="flex items-end">
          <h1 className="pr-2">Genre: </h1>
          <p className="text-lg">{posterUrl.Genre}</p>
        </div>
        <div className="py-2">
          <h1 className="">Description</h1>
          <hr className="text-teal-500 text-lg" />
          <p className="text-lg">{posterUrl.Plot}</p>
        </div>
      </div>
    </div>
  );
}
