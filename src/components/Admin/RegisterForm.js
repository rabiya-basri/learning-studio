import React, { useState} from "react";
import { Link,Route} from "react-router-dom";
import validator from 'validator'
import { startAdminRegister } from "../../actions/adminActions";
import { useDispatch } from "react-redux";
import LoginForm from './LoginForm'
import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";

const RegisterForm = (props) => {
    const paperStyle = { padding: 20, height: '70%', width: 400, margin: '20px auto' }
    
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
        <Grid>
            <Paper style={paperStyle}>
            <Typography variant='h6' style={{marginBottom:'0.4rem',fontWeight:600,marginLeft:'6rem'}}>Admin Registration</Typography>

                <form  onSubmit={handelSubmit} style={{marginLeft:'2rem'}}>
                    <TextField variant="outlined" id="outlined-basic"
                        type='text' value={username} name='username'
                        onChange={handelInputs} label='AdminName'
                        style={{width:'90%'}}
                    /><br />
                    {formErrors.username && <span style={{ color: 'red' }}>{formErrors.username}</span>}<br />
                    
                    <TextField variant="outlined" type='text'
                        value={email} name='email' onChange={handelInputs}
                        label='AdminEmail' style={{width:'90%'}} /><br />
                    {formErrors.email && <span style={{ color: 'red' }}>{formErrors.email}</span>}<br />
                    
                    <TextField variant="outlined" type='password' 
                        value={password} name='password' onChange={handelInputs}
                        label='Password' style={{width:'90%'}} /><br />
                    {formErrors.password && <span style={{ color: 'red' }}>{formErrors.password}</span>}<br />
                    
                    <TextField variant="outlined" type='text' 
                    value={academyname} name='academyname' onChange={handelInputs} 
                    label='Academy Name' style={{width:'90%'}} /><br /><br/>
                    
                    <TextField variant="outlined" type='text' 
                        value={website} name='website' onChange={handelInputs}
                        label='Academy website' style={{width:'90%'}} /><br /><br/>
                    <Button variant='contained' size='small' color='primary' type='submit'>Register</Button>
                </form>

                <Typography style={{ marginTop:'0.3rem',marginLeft:'2rem'}}>Already have an account? <Link to='/admin/login'>Login</Link></Typography>
                <Route path='/admin/login' component={LoginForm} exact={ true}/>
            </Paper>
        </Grid>
    )
}

export default RegisterForm