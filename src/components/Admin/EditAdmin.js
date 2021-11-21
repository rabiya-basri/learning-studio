import React,{useState} from 'react'
import validator from "validator";
import { useDispatch } from 'react-redux';
import { startEditAdmin } from '../../actions/adminActions';

const EditAdmin = (props) => {
    const dispatch = useDispatch()
    
    const [email, setEmai] = useState('')
    const [username, setUsername] = useState('')
    const [academyName, setAcademyName] = useState('')
    const [website, setWebsite] = useState('')
    const [formErrors, setFormErrors] = useState({})
    const errors = {}

    const handelInput = (e) => {
        const attr = e.target.name
        if (attr === 'email') {
            setEmai(e.target.value)
        } else if (attr === 'username') {
            setUsername(e.target.value)
        } else if (attr === 'academyname') {
            setAcademyName(e.target.value)
        } else if (attr === 'website') {
            setWebsite(e.target.value)
        }
    }

    const runValidation = () => {
        //email
        if (email.trim().length === 0) {
            errors.email='email cannot be blank'
        } else if (!validator.isEmail(email)) {
            errors.email='Invalid emails'
        }
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        runValidation()
        if (Object.keys(errors).length === 0) {
            setFormErrors({})
            const formData = {
                email,
                username,
                academy: {
                    name: academyName,
                    website:website
                }
            }
            console.log(formData)
            dispatch(startEditAdmin(formData))
            setEmai('')
            setUsername('')
            setAcademyName('')
            setWebsite('')
        } else {
            setFormErrors(errors)
        }
    }

    return (
        <div>
            <h1>Edit Admin</h1>
            <form onSubmit={handelSubmit}>
                <input type='text' value={email} onChange={handelInput} name='email' placeholder='Enter Email' /><br />
                {formErrors.email && <span>{ formErrors.email}</span>}<br/>
                <input type='text' value={ username} onChange={ handelInput} name='username' placeholder='Enter username' /><br/>
                <input type='text' value={ academyName} onChange={ handelInput} name='academyname' placeholder='Enter academy name' /><br/>
                <input type='text' value={ website} onChange={ handelInput} name='website' placeholder='Enter website' /><br/>
                <input type='submit' value='save'/>
            </form>
        </div>
    )
}
export default EditAdmin