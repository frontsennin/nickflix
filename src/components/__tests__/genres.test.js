// genres.test.jsx

import React from "react";
import { render, screen } from "@testing-library/react";
import { Genres } from "../genres";

test("renders genres list correctly", () => {
  const mockGenresList = [
    { name: "Action", id: 1 },
    { name: "Comedy", id: 2 },
  ];

  render(<Genres viewGenresList={mockGenresList} />);


  mockGenresList.forEach(({ name }, index) => {
    const genreElement = screen.getByText(name);
    expect(genreElement).toBeInTheDocument();
  });
});

test("does not render anything when viewGenresList is empty", () => {
  render(<Genres viewGenresList={[]} />);

  expect(screen.queryByRole("article", { name: /genre-card/i })).toBeNull();
});
