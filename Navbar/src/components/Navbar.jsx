import React from "react";

const Navbar = () => {
    return(
        <div id="nav">

            <div id="left">
                <h1>LOCOBAKERY</h1>
            </div>

            <div id="middle">
                <p>Services</p>
                <p>Projects</p>
                <p>About</p>
            </div>

            <div id="right">
                <button>Contact</button>
            </div>
        </div>
    )
}

export default Navbar;