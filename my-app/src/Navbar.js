import React from 'react';
import {NavLink} from 'react-router-dom';

function Navbar(){
    return(
        <nav className="navbar">
            <div className= "navlinksContainer">
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/sweaters">Sweaters</NavLink>
                <NavLink to="/sneakers">Sneakers</NavLink>
                <NavLink to="/bottoms">Bottoms</NavLink>
            </div>
        </nav>
    )
}


export default Navbar;