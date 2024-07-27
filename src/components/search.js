"use client";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    router.push(`/search/${searchTerm}`);

    setSearchTerm("");
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="columns  is-mobile">
        <div className="column is-9">
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input"
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon fixedWidth icon={faSearch} />
              </span>
            </p>
          </div>
        </div>
        <div className="column">
          <button type="submit" className="button">
            Search
          </button>
        </div>
      </div>
    </form>
  );
}
