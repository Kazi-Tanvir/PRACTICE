import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Navbar = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>
            the {count} is
        </div>
    )
}

export default Navbar
