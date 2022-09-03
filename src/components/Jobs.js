import React from "react";

export default function Jobs(){
    //let jobsdata= [career,career,career]
    return(
        <>
            <p className="work">
            Our teams are multidisciplinary and they communicate via slack.
            Every day we do dailys where our members talk about the progress and how to improve daily activities. 
            </p>
        {/* Careers */}
            <h2>
            Work with us
            </h2>
            <h3>
            We work every detail from the beginning!
            </h3>{/* 
            {jobsdata ?
            <div>
                {jobsdata.map(j =>
                    <div key={j.id}>
                        <h5>{j.title}</h5>
                        <p>{j.description}</p>
                    </div>)}
            </div> : null} */}
        </>
    )
}