import React,{useState} from 'react'
import validator from 'validator'
import { startRegisterStudent } from '../../actions/studentActions'
import { useDispatch } from 'react-redux'
import {Grid,Paper, TextField, Typography,Button} from '@material-ui/core'
const Register = (props) => {
    const { toggel,handelToggel } = props
    
    const paperStyle = { padding: 20, height: '70%', width: 400, margin: '20px auto' }

    const dispatch = useDispatch()
    
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formErrors, setFormErrors] = useState({})
    const errors = {}
    
    const handelInput = (e) => {
        const attr = e.target.name
        if (attr === 'name') {
            setName(e.target.value)
        } else if (attr === 'email') {
            setEmail(e.target.value)
        } else if (attr === 'password') {
            setPassword(e.target.value)
        }
    }

    const runValidation = () => {
        //username
        if (name.trim().length === 0) {
            errors.name='username cannot be blank'
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

    const resetForm = () => {
        setName('')
        setEmail('')
        setPassword('')
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        runValidation()
        if (Object.keys(errors).length === 0) {
            setFormErrors({})
            const formData = {
                name,
                email,
                password
            }
            console.log(formData)
            dispatch(startRegisterStudent(formData,handelToggel))
            resetForm()
        } else {
            setFormErrors(errors)
        }
    }
    return (
        <Grid>
            <Paper style={paperStyle}>
            <Typography variant='h6' style={{marginBottom:'0.4rem',fontWeight:600,marginLeft:'6rem'}}>Register Student</Typography>
            <form onSubmit={ handelSubmit}>
                <TextField type='text' value={name} onChange={handelInput}
                name='name' label='Student Name'
                style={{width:'90%'}}    
                /><br />
                {formErrors.name && <span style={{ color: 'red' }}>{formErrors.name}</span>}<br />
                    
                <TextField type='text' value={email} onChange={handelInput}
                name='email' label='Student Email'style={{width:'90%'}} /><br />
                {formErrors.email && <span style={{ color: 'red' }}>{formErrors.email}</span>}<br />
                    
                <TextField type='password' value={password} onChange={handelInput}
                name='password' label='Student Password' style={{width:'90%'}} /><br />
                {formErrors.password && <span style={{ color: 'red' }}>{formErrors.password}</span>}<br />
                    
                <Button variant='contained'
                    size='small'
                    color='primary'
                    type='submit'
                >Register</Button>
                
            </form>
            </Paper>
        </Grid>
    )
}
export default Register