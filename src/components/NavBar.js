import { Divider, Toolbar,Typography } from "@material-ui/core";
import React from "react";
import { Link,withRouter } from 'react-router-dom'
import Routing from "./Routing";
import '../css/navStyle.css'
import { useSelector } from "react-redux";

const NavBar = (props) => {
    const users = useSelector((state) => {
        return state.admin.data
    })
    const {isLoggedIn,handelAuth}=props

    return (
        <>
            <Toolbar className='nav-bar'>
            <Typography variant='h4' style={{flexGrow:1}} >lLM</Typography>
            <Link to='/' className='navBarLink'>Home</Link> 
            {isLoggedIn ? (
                    <>
                        {users.role === 'admin' ? (<>
                            <Link to='/admin/account' className='navBarLink'>Account</Link> 
                            <Link to='/students' className='navBarLink'>Students</Link> 
                            <Link className='navBarLink' to='/courses'>courses</Link> 
                        </>) : (
                             <Link className='navBarLink' to='#'>stucourses</Link>    
                        ) }
                    
                        <Link className='navBarLink' onClick={(e) => {
                            e.preventDefault()
                            localStorage.clear('token')
                            alert('successfully log out')
                            handelAuth()
                            props.history.push('/')
                        }}>Logout</Link>
                </>
            ) : (
                <>
                    <Link to='/admin/register' className='navBarLink'>Admin</Link>  
                    <Link to='/studentlogin' className='navBarLink'>Student</Link> 
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