import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Card from "./Card";
import './App.css'

function App() {
  const [cards, setCards] = useState([
    { title: "Card 1", description: "This is the first card." },
    { title: "Card 2", description: "This is the second card." },
    { title: "Card 3", description: "This is the third card." },
    { title: "Card 4", description: "This is the fourth card." },
    { title: "Card 5", description: "This is the fifth card." },
    { title: "Card 6", description: "This is the sixth card." },
    { title: "Card 7", description: "This is the seventh card." },
    { title: "Card 8", description: "This is the eighth card." },
    { title: "Card 9", description: "This is the ninth card." },
    { title: "Card 10", description: "This is the tenth card." },
    { title: "Card 11", description: "This is the eleventh card." },
    { title: "Card 12", description: "This is the twelfth card." },
    { title: "Card 13", description: "This is the thirteenth card." },
    { title: "Card 14", description: "This is the fourteenth card." },
  ]);
  return (
    <div className="App">
      <Navbar />
      <div className="card-container">
        {cards.map((card) => (
          <Card key={card.title} title={card.title} description={card.description} />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default App