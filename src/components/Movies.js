import React from 'react'
import MovieCard from './MovieCard'

const Movies = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  )
}

export default Movies