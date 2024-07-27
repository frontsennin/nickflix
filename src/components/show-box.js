"use client";

import Image from "next/image";
import { Genres } from "./genres";
import { TrailerList } from "./trailer-list";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player";
import { Video } from "./video";
import { useState } from "react";

export default function ShowBox({
  id,
  title,
  image,
  isAdult,
  overview,
  genreList,
}) {
const [hideVideo, setHideVideo] = useState(true)

  return (
    <div className="show-box">
      <div className="columns">
        <div className="column is-3">
          <div className="play-sect">
            <Image
              src={`https://image.tmdb.org/t/p/w500${image}`}
              alt={`${title} box content image`}
              width={1000}
              height={1000}
            />
            <FontAwesomeIcon className="play-icon" icon={faPlay} onClick={() => setHideVideo(false)}/>
          </div>
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
      {
        !hideVideo && (
          <Video closeVideo={() => setHideVideo(true)}/>
        )
      }
    </div>
  );
}
