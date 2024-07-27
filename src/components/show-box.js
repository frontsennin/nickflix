"use client";

import Image from "next/image";
import { Genres } from "./genres";
import { TrailerList } from "./trailer-list";

export default function ShowBox({
  id,
  title,
  image,
  isAdult,
  overview,
  genreList,
}) {
  return (
    <div className="show-box">
      <div className="columns">
        <div className="column is-3">
          <Image
            src={`https://image.tmdb.org/t/p/w500${image}`}
            alt={`${title} box content image`}
            width={1000}
            height={1000}
          />
        </div>
        <div className="column">
          <div className="columns">
            <div className="column">
              <div className="columns">
                <div className="column">
                  <strong className="title is-4">{title}</strong>
                </div>
                <div className="column-1">
                  <div className={isAdult ? "adult-tag" : "free-tag"}>
                    {isAdult ? "+18" : "Free for all"}
                  </div>
                </div>
              </div>
              <Genres viewGenresList={genreList} />
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <p>{overview}</p>
            </div>
          </div>
          <TrailerList id={id} />
        </div>
      </div>
    </div>
  );
}
