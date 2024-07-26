import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContentThumb from "./content-thumb";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useState } from "react";

export default function Carousel({ constentList, genreList, title }) {
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);
  const maxWith = document.getElementById(title + "-carousel")?.scrollWidth;

  useEffect(() => {}, [currentScrollPosition]);

  const changeScrollPosition = (direction) => {
    const element = document.getElementById(title + "-carousel");

    if (direction == "left") {
      element.scrollLeft -= 500;
    } else {
      element.scrollLeft += 500;
    }

    setCurrentScrollPosition(element.scrollLeft);
  };

  return (
    <div className="carousel-sect">
      <h1 className="title">{title}</h1>
      <div
        className="arrow-section arrow-left"
        onClick={() => changeScrollPosition("left")}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      <div
        className="arrow-section arrow-right"
        onClick={() => changeScrollPosition("right")}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
      <div id={title + "-carousel"} className="carousel">
        {constentList &&
          constentList.length > 0 &&
          constentList.map(
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
              <ContentThumb
                key={index}
                genreList={genreList || []}
                id={id}
                image={poster_path}
                isAdult={adult}
                language={original_language}
                overview={overview}
                title={name}
                genreIds={genre_ids}
              />
            )
          )}
      </div>
    </div>
  );
}
