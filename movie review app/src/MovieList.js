import React from 'react';
import Movie from './Movie';

const MovieList = (props) => {
  const { movies } = props;
  return (
    <div>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
 