import React, { useState} from "react";
import { Link,Route } from "react-router-dom";
import LoginForm from "./LoginForm";

const RegisterForm = (props) => {
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [academyname, setAcademyName] = useState('')
    const [website, setWebsite] = useState('')
    

    const handelInputs = (e) => {
        const attr = e.target.name
        if (attr === 'username') {
            setUserName(e.target.value)
        } else if(attr === 'email'){
            setEmail(e.target.value)
        } else if (attr === 'password') {
            setPassword(e.target.value)
        } else if (attr === 'academyname') {
            setAcademyName(e.target.value)
        } else if (attr === 'website') {
            setWebsite(e.target.value)
        }
    }
    return (
        <div>
            <h2>Register</h2>

            <form>
                <input type='text' value={ username} name='username' onChange={ handelInputs} placeholder='Enter username' /><br/>
                <input type='text' value={ email} name='email' onChange={ handelInputs} placeholder='Enter Email' /><br/>
                <input type='password' value={ password} name='password' onChange={ handelInputs} placeholder='Enter Password' /><br/>
                <input type='text' value={ academyname} name='academyname' onChange={ handelInputs} placeholder='Enter academy name' /><br/>
                <input type='text' value={ website} name='website' onChange={ handelInputs} placeholder='Academy website' /><br/>
                <input type='submit' value='Register'/>
            </form>

            <Link to='/admin/login'>Login</Link>
            <Route path='/admin/login' component={LoginForm} exact={ true}/>
        </div>
    )
}

export default RegisterForm