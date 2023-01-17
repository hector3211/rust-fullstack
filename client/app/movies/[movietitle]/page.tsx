import Link from "next/link";
import Movie from "./MovieClient";
type PageProps = {
  params: {
    movietitle: string;
  };
};
export default function MoviePage({ params: { movietitle } }: PageProps) {
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <Movie params={{ movietitle }} />
      <Link href={"/"}>
        <button className="btn btn-primary ">Home</button>
      </Link>
    </div>
  );
}
