import React from "react";
import { Link, Route } from 'react-router-dom'
import AdminContainer from "./Admin/AdminContainer";
import StudentContainer from "./Student/StudentContainer";

const NavBar = (props) => {
    return (
        <div>
            <Link to='/admin'>Admin</Link> | 
            <Link to='/student'>Student</Link>

            <Route path='/admin' component={AdminContainer} exact/>
            <Route path='/student' component={ StudentContainer}/>
        </div>
    )
}
export default NavBar