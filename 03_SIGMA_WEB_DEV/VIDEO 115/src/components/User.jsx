import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const params = useParams();

    return (
        <>
            <p>User is {params.username}</p>
        </>
    )
}

export default User
