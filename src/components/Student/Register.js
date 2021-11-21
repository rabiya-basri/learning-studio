import React,{useState} from 'react'
import validator from 'validator'
import { startRegisterStudent } from '../../actions/studentActions'
import { useDispatch } from 'react-redux'

const Register = (props) => {
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
            dispatch(startRegisterStudent(formData))
            resetForm()
        } else {
            setFormErrors(errors)
        }
    }
    return (
        <div>
            <h2>Register Student</h2>
            <form onSubmit={ handelSubmit}>
                <input type='text' value={name} onChange={handelInput} name='name' placeholder='Enter Student Name' /><br />
                {formErrors.name && <span>{ formErrors.name}</span>}<br/>
                <input type='text' value={email} onChange={handelInput} name='email' placeholder='Enter Student Email' /><br />
                {formErrors.email && <span>{ formErrors.email}</span>}<br/>
                <input type='password' value={ password} onChange={ handelInput} name='password' placeholder='Enter Student Password'/><br/>
                {formErrors.password && <span>{ formErrors.password}</span>}<br/>
                <input type='submit' value='Register' />
            </form>
        </div>
    )
}
export default Register