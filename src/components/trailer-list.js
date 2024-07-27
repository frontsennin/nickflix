import { getMovieTrailers, getTvTrailers } from "@/services/tmdb";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";

export function TrailerList({ id }) {
  const [list, setList] = useState([]);

  const getTrailerList = async () => {
    try {
      const response = await getTvTrailers(id);

      setList(response.results);
      return;
    } catch (error) {
      console.error("first call error:", error);
      try {
        const response = await getMovieTrailers(id);

        setList(response.results);
        return;
      } catch (fallbackError) {
        console.error("secound call error:", fallbackError);
        return { success: false, error: "both fail" };
      }
    }
  };

  useEffect(() => {
    list?.length == 0 && getTrailerList();
  });

  return (
    <>
      <strong className="title">Trailers</strong>
      <div className="trailer-list-max-height">
        <div className="columns is-mobile is-multiline">
          {list &&
            list?.length > 0 &&
            list?.map(({ key, name }, index) => (
              <YouTube
                key={index}
                className="column is-half-desktop is-half-tabled is-full-mobile"
                iframeClassName="trailer-box"
                videoId={key}
                title={name}
              />
            ))}
        </div>
      </div>
    </>
  );
}
