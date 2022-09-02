import React from "react";

export default function Services(){
    let services = [
        {id: 1,image: "img/services/1.png",title: "Custom software development"},
        {id: 2,image: "img/services/2.png",title: "Maintenance and Support"},
        {id: 3,image: "img/services/3.png",title: "UX/UI Design"},
        {id: 4,image: "img/services/4.png",title: "Saas Platforms"},
        {id: 5,image: "img/services/5.png",title: "Progressive Web Apps"},
        {id: 6,image: "img/services/6.png",title: "Cloud Computing"},
        {id: 7,image: "img/services/7.png",title: "Cybersecurity",},
        {id: 8,image: "img/services/8.png",title: "Microservices"},
        {id: 9,image: "img/services/9.png",title: "Data Science"},
        {id: 10,image: "img/services/10.png",title: "Artificial intelligence"},
        {id: 11,image: "img/services/11.png",title: "E-commerce"},
        {id: 12,image: "img/services/12.png",title: "Internet of Things"},
        {id: 13,image: "img/services/13.png",title: "Digital Acceleration"},
        {id: 14,image: "img/services/14.png",title: "Updating applications and architecture"},
        {id: 15,image: "img/services/15.png",title: "App Development"},
        {id: 16,image: "img/services/16.png",title: "ERP & CRM"},
        {id: 17,image: "img/services/17.png",title: "MVC Development"},
        {id: 18,image: "img/services/18.png",title: "IT consulting"}
    ]
    return(
        <div className="services">
            <div className='curve1'></div>
            <h2>
            Our Services
            </h2>
        {/* Services wrapper*/}
        <div className="wrap-container">
        {services?.map(s=>
            <div className='cardService' key={s.id}>
                <img src={s.image} alt={s.title} width='70px'/> 
                <p>{s.title}</p>
            </div>)}
        </div>
        <div className='bottom'><div className='line1'></div><div className='curve2'></div></div>
        </div>
    )
}