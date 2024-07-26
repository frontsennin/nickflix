"use client";

import {
  discoverMovies,
  discoverTv,
  getMovieGenres,
  getTvGenres,
} from "@/services/tmdb";
import { useEffect, useState } from "react";
import Carousel from "./carousel";

export default function CatalogComponent() {
  const [tvList, setTvList] = useState([]);
  const [tvGenreList, setTvGenreList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [movieGenreList, setMovieGenreList] = useState([]);
  const [popularTvList, setPopularTvList] = useState([]);
  const [popularMovieList, setPopularMovieList] = useState([]);
  const [tvDramaList, setTvDramaList] = useState([]);
  const [comedyMovieList, setComedyMovieList] = useState([]);
  const [actionmovieList, setActionMovieList] = useState([]);
  const [showContent, setShowContent] = useState(false);

  const orderByVote = (a, b) => {
    return b.vote_count - a.vote_count;
  };

  const mountTv = async () => {
    try {
      const response = await discoverTv();

      setTvList(response.results);
      mountTvDramaList(response.results);

      const result = response.results.filter((tv) => tv.vote_count > 100);
      result && setPopularTvList(result.sort(orderByVote));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const mountMovie = async () => {
    try {
      const response = await discoverMovies();

      setMovieList(response.results);
      mountComedyMovieList(response.results);
      mountActionMovieList(response.results);

      const result = response.results.filter((movie) => movie.vote_count > 100);
      result && setPopularMovieList(result.sort(orderByVote));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const mountTvDramaList = (fullList) => {
    const list = fullList.filter((tv) => tv.genre_ids.includes(18));
    list && setTvDramaList(list.sort(orderByVote));
  };
  const mountComedyMovieList = (fullList) => {
    const list = fullList.filter((Movie) => Movie.genre_ids.includes(35));
    list && setComedyMovieList(list.sort(orderByVote));
  };
  const mountActionMovieList = (fullList) => {
    const list = fullList.filter((Movie) => Movie.genre_ids.includes(28));
    list && setActionMovieList(list.sort(orderByVote));
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

  const checkContent = () => {
    setShowContent(false);

    if (
      tvList &&
      tvList.length > 0 &&
      movieList &&
      movieList.length > 0 &&
      tvGenreList &&
      tvGenreList.length > 0 &&
      movieGenreList &&
      movieGenreList.length > 0
    ) {
      setShowContent(true);
    }
  };

  useEffect(() => {
    tvList?.length == 0 && mountTv();
    movieList?.length == 0 && mountMovie();
    tvGenreList?.length == 0 && mountTvGenres();
    movieGenreList?.length == 0 && mountMovieGenres();
  });

  useEffect(() => {
    !showContent && checkContent();
  });

  return showContent ? (
    <>
      <Carousel
        title="Popular TV Series"
        constentList={popularTvList}
        genreList={tvGenreList}
      />
      <Carousel
        title="Popular Movies"
        constentList={popularMovieList}
        genreList={movieGenreList}
      />
      <Carousel
        title="Drama Series"
        constentList={tvDramaList}
        genreList={tvGenreList}
      />
      <Carousel
        title="Comedy Movies"
        constentList={comedyMovieList}
        genreList={movieGenreList}
      />
      <Carousel
        title="Action Movies"
        constentList={actionmovieList}
        genreList={movieGenreList}
      />
      <Carousel
        title="Full TV Series"
        constentList={tvList}
        genreList={tvGenreList}
      />
      <Carousel
        title="Full Movies"
        constentList={movieList}
        genreList={movieGenreList}
      />
    </>
  ) : (
    <h1 className="title">no content</h1>
  );
}
