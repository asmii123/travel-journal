import React from "react"

export default function Card(props){

    return(
        <div>
        <div className="card--card">
         
         <img src={`../images/${props.img}`} className="cards--img"/>
         <section className="card--section">
         <div className="card--location">
          <p>{props.location}</p>
          <p className="card--map"><u>View on Google Maps</u></p>
        </div>
            <h2>{props.title}</h2>
            <h5>{props.startDate} - {props.endDate}</h5>
            
            <p>{props.description}</p>
            </section>
        </div>
        </div>
        
        
        
        
    )
}