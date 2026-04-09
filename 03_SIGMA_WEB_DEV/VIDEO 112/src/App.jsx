import { useState } from 'react'
import './App.css'

function App() {
  const [form, setForm] = useState('')

  function handleClick() {
    alert('Button clicked!')
  }

  function handleMouseOver() {
    alert('Mouse over!')
  }

  function handleChange(event) {
    setForm({...form,[event.target.name]: event.target.value})
    console.log(form)
  }


  return (
    <>
      <div className="button">
        <button onClick={handleClick}>
          Click me
        </button>
      </div>
      <div className="button">
        <button onMouseOver={handleMouseOver}>
          Hover over me
        </button>
      </div>

      <input type="text" name="email" value={form.email} onChange={handleChange}/>
      <input type="text" name="phone" value={form.phone} onChange={handleChange}/>

    </>
  )
}

export default App
