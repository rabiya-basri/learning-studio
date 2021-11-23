import React,{useState} from 'react'
import Register from './Register'

const StudentContainer = (props) => {
    const [toggel, setToggel] = useState(false)
    
    const handelToggel = () => {
        setToggel(!toggel)
    }

    return (
        <div>
            <button onClick={ handelToggel}>Add Student</button>
            {toggel && <Register />}
            
        </div>
    )
}
export default StudentContainer