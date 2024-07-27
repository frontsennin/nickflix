export function Genres({viewGenresList}) {
  return (
    viewGenresList?.length > 0 &&
    viewGenresList.map(({ name, id }, index) => (
      <div className="genre-card" key={index}>
        <span>{name}</span>
      </div>
    ))
  );
}
