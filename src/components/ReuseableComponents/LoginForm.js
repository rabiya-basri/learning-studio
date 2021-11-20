import React,{useState} from "react";
import validator from "validator";
import { startAdminLogin } from "../../actions/adminActions";
import { useDispatch } from 'react-redux'

const LoginForm = (props) => {
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
        <div>
            <h2>Login</h2>
            <form onSubmit={ handelSubmit}>
                <input type='text' value={email} onChange={handelInputs} name='email' placeholder='Enter Email' /><br />
                {formErrors.email && <span style={{color:'red'}}>{ formErrors.email}</span>}<br/>
                <input type='password' value={password} onChange={handelInputs} name='password' placeholder='Enter Password' /><br />
                <input type='submit' value='login' />
            </form>
        </div>
    )
}
export default LoginForm