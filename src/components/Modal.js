import React from 'react'

const Modal = () => {
    return (
        <div style={{
            width: "583px", height: "474px", background: "white", padding: "5px 30px", position: "fixed", zIndex: "1",
            left: "50%",
            transform: "translate(-50%, 25%)"
        }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3>Army of the Dead</h3>
                <div style={{fontSize:"30px"}}>&times;</div>
            </div>


            <div style={{ display: "flex" }}>
                <div style={{ marginRight: "20px" }}>
                    <img width={"266px"} height={"389px"} src="https://image.tmdb.org/t/p/w500/z8CExJekGrEThbpMXAmCFvvgoJR.jpg" alt="Army of the Dead" />
                </div>
                <div>
                    <div style={{ marginBottom: "10px" }}>Release date:</div>
                    <div style={{ marginBottom: "10px" }}>Following a zombie outbreak in Las Vegas, a group of mercenaries take the ultimate gamble: venturing into the quarantine zone to pull off the greatest heist ever attempted.
                    </div>
                    <div>6.6 / 10 (1214 total votes)</div>
                </div>
            </div>

        </div>
    )
}

export default Modal