import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../context/context'

const Components1 = () => {
  const value = useContext(counterContext)
  return (
    <>
        <h1>Components {value.count}</h1>
    </>
  )
}

export default Components1
