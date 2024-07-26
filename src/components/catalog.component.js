"use client";

import { discoverMovies, discoverTv } from "@/services/tmdb";
import { useEffect, useState } from "react";
import ContentThumb from "./content-thumb";

export default function CatalogComponent() {
  const [tvList, setTvList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  const mountTv = async () => {
    try {
      const response = await discoverTv();
      setTvList(response.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const mountMovie = async () => {
    try {
      const response = await discoverMovies();
      setMovieList(response.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    tvList?.length == 0 && mountTv();
    movieList?.length == 0 && mountMovie();
  }, [tvList, movieList]);

  return (
    <div className="fixed-grid has-4-cols">
      <div className="grid">
        {tvList?.length > 0 &&
          tvList.map(
            (
              { id, poster_path, overview, original_language, name, adult },
              index
            ) => (
              <ContentThumb
                key={index}
                id={id}
                image={poster_path}
                isAdult={adult}
                language={original_language}
                overview={overview}
                title={name}
              />
            )
          )}
        {movieList?.length > 0 &&
          movieList.map(
            (
              { id, poster_path, overview, original_language, original_title, adult },
              index
            ) => (
              <ContentThumb
                key={index}
                id={id}
                image={poster_path}
                isAdult={adult}
                language={original_language}
                overview={overview}
                title={original_title}
              />
            )
          )}
      </div>
    </div>
  );
}
