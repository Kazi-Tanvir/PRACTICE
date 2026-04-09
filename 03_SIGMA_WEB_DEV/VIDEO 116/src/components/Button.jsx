import React, { Component } from 'react'
import Component1 from './Components1'
import { useContext } from 'react'
import { counterContext } from '../context/context'
const Button = () => {
    const { count, setCount } = useContext(counterContext)
    return (
    <>

        <button className='counter' onClick={() => setCount((count) => count + 1)}>
            <span><Component1  /></span>
        </button>

    </>
  )
}

export default Button
