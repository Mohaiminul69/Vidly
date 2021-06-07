import React from "react";

const ListGroup = ({
  genres,
  onGenreChange,
  selectedGenre,
  textProperty,
  valueProperty,
}) => {
  return (
    <ul className="list-group">
      {genres.map((genre) => (
        <li
          key={genre[valueProperty]}
          onClick={() => onGenreChange(genre)}
          style={{ cursor: "pointer" }}
          className={
            selectedGenre === genre
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
