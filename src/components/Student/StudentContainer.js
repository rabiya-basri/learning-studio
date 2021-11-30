import React,{useState,useEffect} from 'react'
import Register from './Register'
import { startAllStudents } from '../../actions/studentActions'
import { useSelector,useDispatch } from 'react-redux'
import StudentTable from './StudentTable'
import { Button,Container, Typography} from '@material-ui/core'

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
        <Container style={{marginTop:'2rem'}}>
            <Button variant='contained' size='small' color='primary' onClick={ handelToggel}>Add Student</Button>
            {toggel &&
                (
                <Register handelToggel={ handelToggel} toggel={ toggel}/>
              )
            }
            <Typography variant='h5' style={{fontWeight:600,margin:'1rem '}}>Total Students - {students.length}</Typography>
            <StudentTable/>
        </Container>
    )
}
export default StudentContainer