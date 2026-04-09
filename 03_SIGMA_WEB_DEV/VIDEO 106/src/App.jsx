import Navbar from "./Navbar";
import Footer from "./Footer";
import Card from "./Card";
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="card-container">
        <Card title="Card 1" description="This is the first card." />
        <Card title="Card 2" description="This is the second card." />
        <Card title="Card 3" description="This is the third card." />
        <Card title="Card 4" description="This is the fourth card." />
        <Card title="Card 5" description="This is the fifth card." />
        <Card title="Card 6" description="This is the sixth card." />
        <Card title="Card 7" description="This is the seventh card." />
        <Card title="Card 8" description="This is the eighth card." />
        <Card title="Card 9" description="This is the ninth card." /> 
        <Card title="Card 10" description="This is the tenth card." />
        <Card title="Card 11" description="This is the eleventh card." />
        <Card title="Card 12" description="This is the twelfth card." />
        <Card title="Card 13" description="This is the thirteenth card." />
        <Card title="Card 14" description="This is the fourteenth card." />
      </div>
      <Footer />
    </div>
  )
}

export default App