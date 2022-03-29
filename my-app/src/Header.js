import React from "react";
import Navbar from './Navbar'
function Header(){ 
    return(
        <header className="header">
            <div className="companyName">
              GIM Fashion 
            </div>
            <div  className="middle">
                <Navbar />
            </div>
            <div className="headerRight">
                <button className="login">Log In</button>
                <img className="cart" src='https://toppng.com/uploads/preview/shopping-cart-png-image-shopping-cart-icon-sv-11562865326ta92uix1ak.png'alt='Shopping cart'/>
            </div>
        </header>
    )
}

export default Header;