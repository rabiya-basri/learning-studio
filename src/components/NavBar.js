import { Toolbar,Typography } from "@material-ui/core";
import React from "react";
import { Link,withRouter } from 'react-router-dom'
import Routing from "./Routing";
const NavBar = (props) => {
    const {isLoggedIn,handelAuth}=props

    return (
        <>
            <Toolbar>
            <Typography variant='h4' style={{flexGrow:1}} >Learning Studio</Typography>
            <Link to='/'>Home</Link> |
            {isLoggedIn ? (
                <>
                    <Link to='/admin/account'>Account</Link> |
                    <Link to='/students'>Students</Link> |
                    <Link>courses</Link> |
                    <Link onClick={(e) => {
                     e.preventDefault()
                     localStorage.removeItem('token')
                     alert('successfully log out')
                     handelAuth()
                     props.history.push('/')
                     }}>Logout</Link>
                </>
            ) : (
                <>
                    <Link to='/admin/register'>Admin</Link> | 
                    <Link to='/studentlogin'>Student</Link> 
                </>
            )}
            </Toolbar>
        <>
             <Routing handelAuth={ handelAuth}/>
        </>
    </>
    )
}
export default withRouter(NavBar)