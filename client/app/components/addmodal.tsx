"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
// import Toast from "./toast";

export default function Modal() {
  const [movieTitle, setMovieTitle] = useState<string>("");
  const [MovieRating, setMovieRating] = useState<string>("");
  const [addButton, setAddButton] = useState<true | false>(true);
  const [responseStatus, setResponseStatus] = useState<number | null>(null);
  // const [showToast, setShowToast] = useState<true | false>(false);
  const router = useRouter();

  function handleSubmitButton() {
    setAddButton(false);
    axios
      .post(
        `${process.env.NEXT_PUBLIC_URL}/newmovie/${movieTitle}/${movieTitle}/${MovieRating}`
      )
      .then((res) => setResponseStatus(res.status))
      .catch((res) => console.log(res));
    setMovieTitle("");
    setMovieRating("");
    setAddButton(true);
  }
  if (responseStatus === 200) {
    router.refresh();
    setResponseStatus(null);
  }

  return (
    <div className="flex justify-center items-center ">
      <label htmlFor="my-modal-3" className="btn btn-primary w-32">
        Add
      </label>
      <input
        type={"checkbox"}
        id="my-modal-3"
        className="modal-toggle input input-bordered required:border-red-500"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            X
          </label>
          <div className="flex flex-col justify-between items-center">
            <h3 className="text-3xl font-bold pb-5">Add movie</h3>
            <div className="flex flex-col justify-center w-60">
              <input
                className="input w-full max-w-xs mb-2"
                type={"text"}
                value={movieTitle}
                placeholder={" Title"}
                onChange={(e) => setMovieTitle(e.target.value)}
              />
              <input
                className="input w-full max-w-xs"
                type={"text"}
                value={MovieRating}
                placeholder={" Rating"}
                onChange={(e) => setMovieRating(e.target.value)}
              />
            </div>
            {addButton ? (
              <button
                onClick={handleSubmitButton}
                className="btn btn-success btn-wide my-3"
              >
                Submit
              </button>
            ) : (
              <div className="alert shadow-lg">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-info flex-shrink-0 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span>Successfully added movie</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
