type PageProps = {
  params: {
    movieid: string;
  };
};

export default function MoviePage({ params: { movieid } }: PageProps) {
  return <div>Movie page for {movieid}</div>;
}
// export async function generateStaticParams() {
//   const res = await fetch(url, { next: { revalidate: 10 } });
//   if (!res) {
//     throw new Error("Error fetching data from server");
//   }
//
//   const allMovies: Movie[] = await res.json();
//   return allMovies.map((movie) => ({
//     movieid: movie.id.toString(),
//   }));
// }
