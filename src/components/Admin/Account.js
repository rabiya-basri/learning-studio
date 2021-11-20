import React from 'react'
import { useSelector } from 'react-redux'

const Account = (props) => {
    const admin = useSelector((state) => {
        return state.admin.data
    })
    return (
        <div>
            <h1>User Details</h1>
            <button>Edit</button>
            <h3>Role: { admin.role}</h3>
            <p>Username: {admin.username}</p>
            <p>Email: { admin.email}</p>
        </div>
    )
}
export default Account