import React,{useState} from "react";
import validator from "validator";
import { startAdminLogin } from "../../actions/adminActions";
import { useDispatch } from 'react-redux'
import { Grid, TextField, Typography , Button, Paper} from "@material-ui/core";

const LoginForm = (props) => {
    const paperStyle={padding:20,height:'40%',width:200,margin:'20px auto'}
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
            <Typography>Admin Login</Typography>
            <form onSubmit={ handelSubmit}>
                <TextField type='text' value={email}
                    onChange={handelInputs} name='email'
                    label='Enter Email' variant='outlined' /><br/>
                {formErrors.email && <span style={{ color: 'red' }}>{formErrors.email}</span>}<br />
                
                <TextField type='password' value={password}
                    onChange={handelInputs} name='password'
                    label='Enter Password' variant='outlined'/><br />
                <Button variant='contained' size='small' color='primary' type='submit'>Login</Button><br/>
            </form>
            </Paper>
        </Grid>
    )
}
export default LoginForm