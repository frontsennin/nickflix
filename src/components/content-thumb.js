"use client";

import Image from "next/image";

export default function ContentThumb({
  id,
  title,
  image,
  isAdult,
  overview,
  language,
}) {
  return (
    <div className="cell">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <Image
              src={`https://image.tmdb.org/t/p/w500${image}`}
              alt={`${title} image`}
              width={100}
              height={100}
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${image}`}
                  alt={`${title} image`}
                  width={100}
                  height={100}
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{title}</p>
            </div>
          </div>

          <div className="content">
            <p>{overview}</p>
            <br />
            <p>{language}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
