import React from "react";

export default function Home(){
    let description=[
        {id: 2,text: "Contact us now, we want to take your business to the next level and keep you above your competitors.",html:'Contact'},
        {id: 1,text: "We know that in the world of development not everyone who claims to be a programmer can measure up. We don't mean that they mislead customers by promising results, but maybe they don't have the right mindset."},
        {id: 3,text: "For us, the challenge is not to stop learning, doing a lot of research, working hard, making time to test new technologies, learning new programming languages ​​and languages, while dedicating exclusive attention to our clients."}]
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
            </div>
            <img  className="img-hero" src='/img/illustrations/hero.png' alt='Ehupi' />
        </div>
        {/* Description */}
        <div className="hero-description">
        {description?.map(d=>
            <div className="hero-description-card" key={d.id}>
                <p>{d.text}</p>
                {d.html? 
            <button className='btn-nav'>{d.html}</button> :null}
            </div>)}</div>
        </>
    )
}