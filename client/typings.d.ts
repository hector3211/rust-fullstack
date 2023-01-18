export type Movie = {
  id: number;
  title: string;
  cover: stiring;
  rating: number;
};

export type Poster = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: {
    Source: string;
    Value: string;
  }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  totalSeasons: string;
  Response: string;
};

export type Tmdb = {
  poster_path: string;
  adult: string;
  overview: string;
  release_date: string;
  gengre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
};
//
export type Video = {
  id: number;
  results: {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
  }[];
};
