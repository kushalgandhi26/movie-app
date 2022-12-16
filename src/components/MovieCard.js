import React from 'react'

const MovieCard = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "10px 10px" }}>
            <div>
                <div style={{
                    position: "absolute",
                    margin: "9px",
                    width: "18px",
                    textAlign: "center",
                    height: "18px",
                    background: "white",
                    borderRadius: "50px",
                    fontSize: "12px",
                    padding: "6px",
                    border: "1px solid black",
                }}>7.1</div>
                <img width={"250px"} height={"auto"} style={{ borderRadius: "10px 10px 0 0" }} src="https://image.tmdb.org/t/p/w500/6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg" alt="movie poster" />
            </div>
            <div style={{ textAlign: "center", borderRadius: "0 0 10px 10px" }}>Name</div>
        </div>
    )
}

export default MovieCard