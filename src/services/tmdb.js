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

const discoverTv = async () => {
  const response = await api.get("/3/discover/tv", options);
  return response.data;
};

export { auth, discoverMovies, discoverTv };

export default api;
