import React from "react";

export default function Home(){

   return(
        <>
        {/* Hero */}
        <div className="hero">
            <div>
            <h1>
            Are you ready to change the level of your business forever?
            </h1>
            <h4>
            We're here to turn your genius into software. You don't need to look any further, we are the team you need.
            </h4>
            
            <button className='btn-nav'>Get Start</button>
            </div>
            <img  className="img-hero" src='/img/illustrations/hero.png' alt='Ehupi' />
        </div>
        {/* Description */}
        <p className="work">Contact us now, we want to take your business to the next level and keep you above your competitors</p>
        <div className="hero-description">
            <div className="hero-description-card" >
                <p>We know that in the world of development not everyone who claims to be a programmer can measure up. We don't mean that they mislead customers by promising results, but maybe they don't have the right mindset</p>
            </div>
            <div className="hero-description-card" >
                <p>For us, the challenge is not to stop learning, doing a lot of research, working hard, making time to test new technologies, learning new programming languages ​​and languages, while dedicating exclusive attention to our clients.</p>
            </div></div>
        </>
    )
}