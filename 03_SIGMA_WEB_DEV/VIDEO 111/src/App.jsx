import { useState, useRef, useEffect } from 'react'
import './App.css'
import Card from './components/Card'


function App() {
  const [card, setCard] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setCard(data.slice(0, 12))) // Show only 12 cards for a clean look
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  return (
    <>
      <header className="site-header">
        <div className="container">
          <h1>Card Gallery</h1>
          <p>Browse a collection of beautiful cards fetched from an API.</p>
        </div>
      </header>
      <main className="main-content">
        <div className="card-container">
          {card.map((user) => (
            <Card key={user.id} name={user.title} username={user.body} />
          ))}
        </div>
      </main>
      <footer className="site-footer">
        <div className="container">
          <p>&copy; 2026 Card Gallery. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App