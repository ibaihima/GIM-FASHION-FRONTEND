import React from "react";
import Navbar from './Navbar'
import {NavLink} from 'react-router-dom';




function Header({loginUser}){ 
    const login_str = loginUser.id ? "You are logged in" : "Please login" ;
    
    return(
        <header className="header">
            <div className="companyName">
              GIM Fashion
            </div>
            <div  className="middle">
                <Navbar />
            </div>
            <div className = "headerRight">
                <div id='loginUser'>{login_str}</div>
                <NavLink className="login" to="/login">
                    <button className="login">
                        Log In
                    </button> 
                </NavLink>
                <NavLink to="/shopping-cart">  
                        <img className="cart" src='https://cdn-icons-png.flaticon.com/512/1122/1122058.png'alt='Shopping Cart'/>
                </NavLink>
            </div>   
        </header>
    )
}



export default Header;