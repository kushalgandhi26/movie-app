import React from 'react'

const Modal = ({ setIsOpen, movieInfo }) => {
    return (
        <div style={{
            width: "583px", height: "474px", background: "white", padding: "5px 30px", position: "fixed", zIndex: "1",
            left: "50%",
            transform: "translate(-50%, 25%)"
        }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3>{movieInfo.title}</h3>
                <div style={{ fontSize: "30px", cursor: "pointer" }} onClick={() => setIsOpen(false)}>&times;</div>
            </div>


            <div style={{ display: "flex" }}>
                <div style={{ marginRight: "20px" }}>
                    <img width={"266px"} height={"389px"} src={"https://image.tmdb.org/t/p/w500/" + movieInfo.poster_path} alt="Army of the Dead" />
                </div>
                <div>
                    <div style={{ marginBottom: "10px" }}>Release date:<span> {movieInfo.release_date}</span></div>
                    <div style={{ marginBottom: "10px" }}>{movieInfo.overview}</div>
                    <div>{movieInfo.vote_average}/ 10 ({movieInfo.vote_count} total votes)</div>
                </div>
            </div>

        </div>
    )
}

export default Modal