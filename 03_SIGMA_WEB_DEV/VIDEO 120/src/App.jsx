import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount, multiply } from './redux/counter/counterSlice'
import Navbar from './components/Navbar'
function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
    < Navbar />
    <button onClick={() => dispatch(decrement())}>-</button>
      <div className="count">
        {count}
      </div>
    <button onClick={() => dispatch(increment())}>+</button>
    <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    <button onClick={() => dispatch(multiply(2))}>*2</button>
    </>
  )
}

export default App
