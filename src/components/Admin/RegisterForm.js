import React, { useState} from "react";
import { Link,Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import validator from 'validator'
import { startAdminRegister } from "../../actions/adminActions";
import { useDispatch } from "react-redux";

const RegisterForm = (props) => {
    const dispatch = useDispatch()
    
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [academyname, setAcademyName] = useState('')
    const [website, setWebsite] = useState('')
    const [formErrors, setFormErrors] = useState({})
    const errors={}

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

    //registerform validation
    const runValidation = () => {
        //username
        if (username.trim().length === 0) {
            errors.username='username cannot be blank'
        }
        //email
        if (email.trim().length === 0) {
            errors.email='email cannot be blank'
        } else if (!validator.isEmail(email)) {
            errors.email='Invalid email'
        }
        //password
        if (password.trim().length < 8) {
            errors.password='password cannot be lessthan 8 characters'
        }
    }

    //Reset registration form
    const handelFormReset = () => {
        setUserName('')
        setEmail('')
        setPassword('')
        setAcademyName('')
        setWebsite('')
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        runValidation()
        if (Object.keys(errors).length === 0) {
            setFormErrors({})
            const formData = {
                username: username,
                email: email,
                password: password,
                academy: {
                    name: academyname,
                    website:website
                }
            }
            //console.log(formData)
            dispatch(startAdminRegister(formData, props))
            handelFormReset()
        } else {
            setFormErrors(errors)
        }
    }

    return (
        <div>
            <h2>Register</h2>

            <form onSubmit={handelSubmit}>
                <input type='text' value={username} name='username' onChange={handelInputs} placeholder='Enter username' /><br />
                {formErrors.username && <span style={{ color: 'red' }}>{formErrors.username}</span>}<br />
                
                <input type='text' value={email} name='email' onChange={handelInputs} placeholder='Enter Email' /><br />
                {formErrors.email && <span style={{ color: 'red' }}>{formErrors.email}</span>}<br />
                
                <input type='password' value={password} name='password' onChange={handelInputs} placeholder='Enter Password' /><br />
                {formErrors.password && <span style={{ color: 'red' }}>{formErrors.password}</span>}<br />
                
                <input type='text' value={academyname} name='academyname' onChange={handelInputs} placeholder='Enter academy name' /><br />
                
                <input type='text' value={ website} name='website' onChange={ handelInputs} placeholder='Academy website' /><br/>
                <input type='submit' value='Register'/>
            </form>

            <Link to='/admin/login'>Login</Link>
            <Route path='/admin/login' component={LoginForm} exact={ true}/>
        </div>
    )
}

export default RegisterForm