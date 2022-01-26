import React from "react"
import data from "./data"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import './style.css'

export default function App(){
    const cards = data.map(item => {
        return (
            <Card 
            key={item.id}
            img={item.image}
            title={item.title}
            description={item.description}
            startDate={item.startDate}
            endDate={item.endDate}
            location={item.location}
            url={item.googleMapsUrl}
            />
        )
    })
    return(
       <div>
        <Navbar />
        <section className="cards--list">
        {cards}
        </section>
     </div>
    )
}