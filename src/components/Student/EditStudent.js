import React, { useState} from "react";

const EditStudent = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    
    const handelInput = (e) => {
        const attr = e.target.name
        if (attr === 'name') {
            setName(e.target.value)
        } else if (attr === 'email') {
            setEmail(e.target.value)
        }
    }

    const handelSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={ handelSubmit}>
                <input type='name' value={ name} onChange={ handelInput} name='name'/>
                <input type='email' value={ email} onChange={ handelInput} email='email'/>
                <input type='submit'/>
            </form>
        </div>
    )
}
export default EditStudent