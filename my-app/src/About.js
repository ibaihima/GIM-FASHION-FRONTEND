import React from 'react';

function About() {
    
    return (
        <div className='about_page'>
            <div className='about_us_container'>
                <img id="about_us_logo" src='./assets/logoG.png' alt='GIM Fashion Logo'/>
                <div className='about_us_right_side'>
                    <p>
                        At GIM Fashion, our mission is to provide a catalog of the trendiest clothes <br/>
                        all in one place! We appreciate any feedback you have for our website and our <br/>
                        selection of clothes. Get to know the founders of GIM Fashion below:
                    </p>
                    <h3>
                        Gerald Gorman
                    </h3>
                    <h3>
                        Ibaihima Soumounou
                    </h3>
                    <h3>
                        Miguel Nazario
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default About;

