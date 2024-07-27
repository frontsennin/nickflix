"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { updateShowCOntent } from "@/app/GlobalRedux/Features/showContent/showContentSlice";
import { Genres } from "./genres";

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
  const router = useRouter();

  const dispatch = useDispatch();

  const compareArrays = (array1, array2) => {
    const idsParaManter = new Set(array2);
    return array1.filter((item) => idsParaManter.has(item.id));
  };

  const goToShowPage = () => {
    const body = {
      id,
      title,
      image,
      isAdult,
      overview,
      language,
      genreList: viewGenresList,
    };

    dispatch(updateShowCOntent(body));
    router.push("/show");
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
      onClick={goToShowPage}
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
                <Genres viewGenresList={viewGenresList} />
              </div>
            </div>
          )}
        </figure>
      </div>
    </div>
  );
}
