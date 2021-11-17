import React from "react";
import { Link,Route } from 'react-router-dom'
import Home from "./Home";
import RegisterForm from './Admin/RegisterForm'
import LoginForm from './Admin/LoginForm'

const NavBar = (props) => {
    return (
        <div>
            <Link to='/'>Home</Link> |
            <Link to='/admin/register'>Admin</Link> | 
            <Link to='/student/login'>Student</Link>

            <Route path='/' component={Home} exact={ true}/>
            <Route path='/admin/register' component={RegisterForm} exact={ true}/>
            <Route path='/student/login' component={LoginForm} />
        </div>
    )
}
export default NavBar