import React from "react";
import { Link } from 'react-router-dom'
import Routing from "./Routing";

const NavBar = (props) => {
    const {isLoggedIn,handelAuth}=props

    return (
        <div>
            <Link to='/'>Home</Link> |
            {isLoggedIn ? (
                <>
                    <Link>Student</Link> |
                    <Link>courses</Link> |
                    <Link onClick={(e) => {
                                e.preventDefault()
                                localStorage.removeItem('token')
                                console.log('successfully log out')
                                handelAuth()
                                props.history.push('/')
                            }}>Logout</Link>
                </>
            ) : (
                <>
                    <Link to='/admin/register'>Admin</Link> | 
                    <Link to='/student/login'>Student</Link> 
                </>
            )}
            <Routing handelAuth={ handelAuth}/>
        </div>
    )
}
export default NavBar