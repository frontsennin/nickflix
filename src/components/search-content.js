"use client";

import { getMovieGenres, getTvGenres, searchByTerm } from "@/services/tmdb";
import { useEffect, useState } from "react";
import ContentThumb from "./content-thumb";

export default function SearchContent({ searchValue }) {
  const [list, setList] = useState([]);
  const [tvGenreList, setTvGenreList] = useState([]);
  const [movieGenreList, setMovieGenreList] = useState([]);

  const orderByVote = (a, b) => {
    return b.vote_count - a.vote_count;
  };

  const mountList = async () => {
    try {
      const response = await searchByTerm(searchValue);

      const result = response.results.filter(
        (item) => item.media_type === "movie" || item.media_type === "tv"
      );
      result && setList(result.sort(orderByVote));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const mountTvGenres = async () => {
    try {
      const response = await getTvGenres();
      setTvGenreList(response.genres);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const mountMovieGenres = async () => {
    try {
      const response = await getMovieGenres();
      setMovieGenreList(response.genres);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    list?.length == 0 && mountList();
    tvGenreList?.length == 0 && mountTvGenres();
    movieGenreList?.length == 0 && mountMovieGenres();
  });

  return (
    list &&
    list?.length > 0 && (
      <div className="columns  is-gapless is-multiline is-mobile is-2-mobile is-2-tablet is-3-desktop is-8-widescreen is-3-fullhd">
        {list.map(
          (
            {
              id,
              poster_path,
              overview,
              original_language,
              name,
              adult,
              genre_ids,
            },
            index
          ) => (
            <div className="column" key={index}>
              <ContentThumb
                key={index}
                genreList={tvGenreList || []}
                id={id}
                image={poster_path}
                isAdult={adult}
                language={original_language}
                overview={overview}
                title={name}
                genreIds={genre_ids}
              />
            </div>
          )
        )}
      </div>
    )
  );
}
