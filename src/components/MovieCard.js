import React from 'react'

const MovieCard = ({ movie, setIsOpen, setMovieInfo }) => {
    return (
        <div style={{
            display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
            margin: "10px 10px",
            background: "#FFFFFF",
            border: "1px solid #E1E3E6",
            boxShadow: "1px 2px 8px 2px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            cursor: "pointer"
        }} onClick={() => { setMovieInfo(movie); setIsOpen(true) }}>
            <div>
                <div style={{
                    position: "absolute",
                    margin: "14px",
                    width: "17px",
                    textAlign: "center",
                    height: "17px",
                    background: "white",
                    borderRadius: "50px",
                    fontSize: "12px",
                    padding: "6px",
                    border: "1px solid #000000",
                }}>{movie.vote_average}</div>
                <img width={"278px"} height={"302px"} style={{ borderRadius: "7px 7px 0 0" }} src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="movie poster" />
            </div>
            <div style={{ width: "231px", minHeight: "40px", textAlign: "center", borderRadius: "0 0 7px 7px", transform:"translateY(10%)"}}>{movie.title}</div>
        </div>
    )
}

export default MovieCard