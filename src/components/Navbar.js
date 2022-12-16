import React from 'react'
import Logo from './insynk.png'

const Navbar = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
                <image width={"50px"} height={"auto"} src={Logo} alt="logo" />
            </div>
            <div>
                <input style={{ padding: "6px" }} type="text" placeholder="Search" />
            </div>
        </div>
    )
}

export default Navbar