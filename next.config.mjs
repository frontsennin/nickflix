/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    TMDB_API_URL: "https://api.themoviedb.org",
    TMDB_API_KEY: "0e6a4f8da332f258dc30ca6703ba8713",
    TMDB_TOKEN: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTZhNGY4ZGEzMzJmMjU4ZGMzMGNhNjcwM2JhODcxMyIsIm5iZiI6MTcyMTk0ODc1MS45NTY4NzEsInN1YiI6IjY2YTJkOGI1ZWJiYmE4NzM3NmNhN2ZjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2J_WqjeFCC8HdbpscH1wvDgYk3L7UYJL4EEE43ZqJSU",
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org'
      }
    ],
  },
};

export default nextConfig;
