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
                        <img className="cart" src='https://toppng.com/uploads/preview/shopping-cart-png-image-shopping-cart-icon-sv-11562865326ta92uix1ak.png'alt='Shopping cart'/>
                </NavLink>
            </div>   
        </header>
    )
}



export default Header;