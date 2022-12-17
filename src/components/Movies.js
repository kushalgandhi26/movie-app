import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'

const Movies = ({ setIsOpen, setMovieInfo, movieList, setMovieList }) => {

  const getRecentMovies = async () => {
    const data = await fetch(`${process.env.REACT_APP_API_URL}/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`).then(res => res.json()).then(data => {
      setMovieList(data)
    })
  }

  useEffect(() => {
    getRecentMovies();
  }, [])


  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {movieList.results !== undefined && movieList.results.map((movie) => <MovieCard key={movie.id} movie={movie} setIsOpen={setIsOpen} setMovieInfo={setMovieInfo} />)}
    </div>
  )
}

export default Movies