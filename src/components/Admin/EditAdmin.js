import React,{useState} from 'react'
import validator from "validator";
import { useDispatch } from 'react-redux';
import { startEditAdmin } from '../../actions/adminActions';
import { Grid, TextField, Typography,Button } from '@material-ui/core';
import { teal } from '@material-ui/core/colors';
const EditAdmin = (props) => {
    const { email:adminEmail, adminName, academyName:adminAcademy, website:adminWebsite,handelToggle,toggle } = props
    
    const dispatch = useDispatch()
    
    const [email, setEmai] = useState(adminEmail?adminEmail:'')
    const [username, setUsername] = useState(adminName?adminName:'')
    const [academyName, setAcademyName] = useState(adminAcademy?adminAcademy:'')
    const [website, setWebsite] = useState(adminWebsite?adminWebsite:'')
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
        <Grid>
            <Typography variant='h6' style={{marginBottom:'0.4rem',fontWeight:600,marginLeft:'6rem'}}>Edit Admin</Typography>
            <form onSubmit={handelSubmit}>
                <TextField type='text'
                    value={email}
                    onChange={handelInput}
                    name='email'
                    label='AdminEmail'
                    variant='outlined'
                /><br />
                {formErrors.email && <span>{formErrors.email}</span>}<br />
                
                <TextField type='text'
                    value={username}
                    onChange={handelInput}
                    label='AdminName'
                    name='username'
                    variant='outlined'
                /><br /><br/>

                <TextField type='text'
                    value={academyName}
                    onChange={handelInput}
                    label='AcademyName'
                    name='academyname'
                    variant='outlined'
                /><br /><br/>
                
                <TextField type='text'
                    value={website}
                    onChange={handelInput}
                    label='website'
                    name='website'
                    variant='outlined'
                /><br /><br/>

                <Button variant='contained'
                    size='small'
                    color='primary'
                    type='submit'
                    style={{marginRight:'0.3rem'}}
                >Save</Button>
                {toggle && <Button variant='contained' size='small'
                    color='secondary' onClick={handelToggle}>close</Button>}
            </form>
        </Grid>
    )
}
export default EditAdmin