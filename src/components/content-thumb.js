"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ContentThumb({
  id,
  title,
  image,
  isAdult,
  overview,
  language,
  genreList,
  genreIds,
}) {
  const [hovered, setHovered] = useState(false);
  const [viewGenresList, setViewGenresList] = useState([]);

  const compareArrays = (array1, array2) => {
    const idsParaManter = new Set(array2);
    return array1.filter((item) => idsParaManter.has(item.id));
  };

  useEffect(() => {
    if (genreIds && genreList) {
      setViewGenresList(compareArrays(genreList, genreIds));
    }
  }, [genreIds, genreList]);

  return (
    <div
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="card-image">
        <figure className="image is-4by3 thumb-image-sect">
          <Image
            src={`https://image.tmdb.org/t/p/w500${image}`}
            alt={`${title} image`}
            width={100}
            height={100}
          />
          {hovered && (
            <div className="media-content thumb-image-sect-overlay-text">
              <p className="title is-4">{title}</p>
              <div className="genres">
                {viewGenresList?.length > 0 &&
                  viewGenresList.map(({ name, id }, index) => (
                    <div className="genre-card" key={index}>
                      <span>{name}</span>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </figure>
      </div>
    </div>
  );
}
