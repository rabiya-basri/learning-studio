import React from "react";
import { Link } from 'react-router-dom'
import Routing from "./Routing";

const NavBar = (props) => {
    return (
        <div>
            <Link to='/'>Home</Link> |
            <Link to='/admin/register'>Admin</Link> | 
            <Link to='/student/login'>Student</Link>
            <Routing />
        </div>
    )
}
export default NavBar