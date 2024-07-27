import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
  },
};

const api = axios.create({
  baseURL: process.env.TMDB_API_URL,
});

const auth = async () => {
  const response = await api.get("/3/authentication", options);
  return response.data;
};

const discoverMovies = async () => {
  const response = await api.get("/3/discover/movie", options);
  return response.data;
};

const getTvGenres = async () => {
  const response = await api.get("/3/genre/tv/list?language=en", options);
  return response.data;
};

const getMovieGenres = async () => {
  const response = await api.get("/3/genre/movie/list?language=en", options);
  return response.data;
};

const discoverTv = async () => {
  const response = await api.get("/3/discover/tv", options);
  return response.data;
};

const searchByTerm = async (searchValue) => {
  const response = await api.get(
    `/3/search/multi?query=${searchValue}`,
    options
  );
  return response.data;
};

const getTvTrailers = async (id) => {
  const response = await api.get(`/3/tv/${id}/videos`, options);
  return response.data;
};

const getMovieTrailers = async (id) => {
  const response = await api.get(`/3/movie/${id}/videos`, options);
  return response.data;
};

export {
  auth,
  discoverMovies,
  discoverTv,
  getTvGenres,
  getMovieGenres,
  searchByTerm,
  getTvTrailers,
  getMovieTrailers,
};

export default api;
