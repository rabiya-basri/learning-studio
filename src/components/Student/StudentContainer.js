import React,{useState,useEffect} from 'react'
import Register from './Register'
import { startAllStudents } from '../../actions/studentActions'
import { useSelector,useDispatch } from 'react-redux'
import StudentTable from './StudentTable'

const StudentContainer = (props) => {
    const dispatch = useDispatch()
    const students = useSelector((state) => {
        return state.students.data
    })

    const [toggel, setToggel] = useState(false)
    
    const handelToggel = () => {
        setToggel(!toggel)
    }

    useEffect(() => {
       dispatch(startAllStudents()) 
    }, [])
    
    return (
        <div>
            <button onClick={ handelToggel}>Add Student</button>
            {toggel && <Register />}
            <h3>Total Students Enrolled - {students.length}</h3>
            <StudentTable />
        </div>
    )
}
export default StudentContainer