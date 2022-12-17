import React, { useState } from 'react'
import Logo from '../assets/insynk.png'

const Navbar = ({setMovieList}) => {
    const [query, setQuery] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        const data = await fetch(`${process.env.REACT_APP_API_URL}/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&language=en-US&page=1`).then(res => res.json()).then(data => {
            setMovieList(data)
        })
    }

    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
                <img src={Logo} alt="logo" />
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input style={{ padding: "6px" }} type="text" placeholder="Search" onChange={(e) => setQuery(e.target.value)} />
                </form>
            </div>
        </div>
    )
}

export default Navbar