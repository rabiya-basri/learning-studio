import React,{useState} from "react";
import validator from "validator";
import { startAdminLogin } from "../../actions/adminActions";
import { useDispatch } from 'react-redux'
import { Link} from 'react-router-dom'
import { Grid, TextField, Typography , Button, Paper} from "@material-ui/core";

const LoginForm = (props) => {
    const paperStyle={padding:20,height:'40%',width:400,margin:'20px auto'}
    const dispatch = useDispatch()
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formErrors, setFormErrors] = useState({})
    const errors = {}
    
    const handelInputs = (e) => {
        const attr = e.target.name
        if (attr === 'email') {
            setEmail(e.target.value)
        } else if (attr === 'password') {
            setPassword(e.target.value)
        }
    }

    //loginform validation
    const runValidation = () => {
        //email
        if (email.trim().length === 0) {
            errors.email='email cannot be blank'
        } else if (!validator.isEmail(email)) {
            errors.email='Invalid emails'
        }
    }

    //function for login form submission
    const handelSubmit = (e) => {
        e.preventDefault()
        runValidation()
        if (Object.keys(errors).length === 0) {
            setFormErrors({})
            const formData = {
                email,
                password
            }
            dispatch(startAdminLogin(formData, props))
            console.log(formData)
        } else {
            setFormErrors(errors)
        }
    }
    
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
            <Typography variant='h6' style={{marginBottom:'0.4rem',fontWeight:600,marginLeft:'6rem'}}>Admin Login</Typography>
            <form onSubmit={ handelSubmit} style={{marginLeft:'2rem'}}>
                <TextField type='text' value={email}
                    onChange={handelInputs} name='email'
                        label='Enter Email' variant='outlined'
                        style={{width:'90%'}}
                    /><br />
                {formErrors.email && <span style={{ color: 'red' }}>{formErrors.email}</span>}<br />
                
                <TextField type='password' value={password}
                    onChange={handelInputs} name='password'
                        label='Enter Password' variant='outlined'
                        style={{width:'90%'}}
                    /><br /><br/>
                <Button variant='contained' size='small' color='primary' type='submit'>Login</Button><br/>
                </form>
                <Typography style={{ marginTop:'0.3rem',marginLeft:'2rem'}}>Don't have an account? <Link to='/admin/register'>Register</Link></Typography>
            </Paper>
        </Grid>
    )
}
export default LoginForm