import React from "react";
import Technologies from "./Technologies";

export default function About(){

    let description =[
        {id: 1,image: "/sli12.png",text: "It all started when one of us, a passionate computer expert with more than 20 years of experience, was exchanging ideas with two other friends. We soon realized that we could do much more together than separately. Thus, little by little, we were landing the idea and then gathering everything necessary to found ehupi.com."
        },
        {id: 2,image: "/sli12.png",text: "Since then, we have been joined by many excellent professionals who have already worked on a wide variety of projects, from small websites for personal use to applications for large companies."
        },
        {id: 3,image: "/sli12.png",text: "In short, we are a young company, but eager to continue growing and improving, we started working with the idea that we can change the world. We have a dream that our work can help improve the lives of millions of people."
        },
        {id: 4,image: "/sli12.png",text: "At all times we have tried to offer the best possible service to our clients, putting all our experience and knowledge at the service of their needs."
        },
        {id: 5,image: "/sli12.png",text: "We created ehupi.com with the aim of offering high-quality technological solutions that help our clients stay ahead of the competition."
        },
        {id: 6,image: "/sli12.png",text: "We work hard to offer products and services that make life easier for our users."
        },
        {id: 7,image: "/sli12.png",text: "We are a team of passionate about what we do and we are committed to our work. We strive to create products that are on another level."
        },
        {id: 8,image: "/sli12.png",text: "We are proud of what we have achieved, and very much looking forward to building amazing things together."
        }
    ]

    let team = [
        {id:1,image:"/img/team/oscar.png",name:'Oscar Caballero',possition:'Co Founder'},
        {id:2,image:"/img/team/camila.png",name:'Camila Zupanovich',possition:'Team Leader'},
        {id:3,image:"/img/team/oscar.png",name:'Alberto Velasquez',possition:'Full Stack Developer'},
        {id:4,image:"/img/team/camila.png",name:'Kenny',possition:'Project Management'}]

    return(
        <>
        {/* About us*/}
            <h2>
            About us
            </h2>
        {/* Description */}
        <div className="about-content">
            <h3>
            We are a group of professional friends
            </h3>
            <img className="img-about" src='img/illustrations/about-1.jpg' alt='ehupi group'/>
            <img className="img-about pc" src='img/illustrations/about-2.jpg' alt='ehupi group'/>
            <div className="text-about">It all started when one of us, a passionate computer expert with over 20 years of experience, was exchanging ideas with two other friends. We soon realized that we could do much more together than separately. Thus, little by little, we landed the idea and then gathered everything necessary to found ehupi.com.
Since then, we were joined by many excellent professionals who had already worked on a wide variety of projects, from small websites for personal use to applications for large companies. 
In short, we are a young company, but with a lot of desire to continue growing and improving, we began to work with the idea that we can change the world. We have a dream that our work can help improve the lives of millions of people.</div>

<img className="img-about mobil" src='img/illustrations/about-2.jpg' alt='ehupi group'/>
<div className="text-about">
At all times we have tried to offer the best possible service to our customers, putting all our experience and knowledge at the service of their needs.
We create ehupi.com with the aim of offering high quality technological solutions that help our customers stay ahead of the competition. 
We are a team of passionate about what we do and we are committed to our work. We strive to create products that are on another level.
We are proud of what we have achieved, and very much eager to continue building amazing things together.
We work hard to offer products and services that facilitate the day to day of our users.</div>
            <img className="img-about" src='img/illustrations/about-3.jpg' alt='ehupi group'/>
        </div>
        {/* Team */}
        <div className="services">
            <div className='curve1'></div>
            <h2>Our Team</h2>
        <div className="team-body">
        {team?.map(t=>
            <div className="team-card" key={t.id}>
                <img src={t.image} alt={t.name} className='img-team'/> 
                <p className="team-position">{t.possition}</p>
                <p className="team-name">{t.name}</p>
            </div>)}
        </div>
            <div className='bottom'><div className='line1'></div><div className='curve2'></div></div>
        </div>

        {/* Technologies */}
        <h3>Our technology stack is very broad</h3>
        <Technologies/>
        </>
    )
}