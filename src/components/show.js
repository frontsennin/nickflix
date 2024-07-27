"use client";

import ReactPlayer from "react-player";
import ShowBox from "./show-box";

export default function Show({
  id,
  title,
  image,
  isAdult,
  overview,
  language,
  genreList,
  genreIds,
}) {
  return (
    <div className="p-relative">
      <div
        className="show-content"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${image})`,
        }}
      >
        <ShowBox
          id={id}
          title={title}
          image={image}
          isAdult={isAdult}
          overview={overview}
          genreList={genreList}
        />
      </div>
      <div className="overlay"></div>
    </div>
  );
}
