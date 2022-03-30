import React from "react";

function Home ({cloths}) {

    let randomItem = Math.floor(Math.random()*cloths.length);
    
    return (
        
        <div className="home">
            <div className="picsContainer">
                <h3 className= "title">Trendy Clothes 2022
                    <p className="names">
                        <em>G</em>erald <br/>
                        <em>I</em>ba <br/>
                        <em>M</em>iguel
                    </p>
                </h3>
                
                <div className="pic1">
                    <img src={cloths.length > 0 ? cloths[randomItem].image1 : ""} alt="first displayed"/>
                </div>
                <div className="pic2">
                    <img src="https://i.pinimg.com/736x/ce/bc/1a/cebc1aa602672a6fd5de2a98f8e040c7.jpg" alt="second displayed"/>
                </div>
            </div>
        </div>
    )
}

export default Home;