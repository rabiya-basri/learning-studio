import React,{useState,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AddCourseForm from './AddCourseForm'
import { startAllCourses } from '../../actions/adminActions'
import CourseTable from './CourseTable'

const Course = (props) => {
    const [toggel,setToggel]=useState(false)
    const dispatch = useDispatch()
    
    const courses = useSelector((state) => {
        return state.admin.courses
    })
    console.log(courses)

    useEffect(() => {
       dispatch(startAllCourses()) 
    }, [])
    
    const handelToggel=()=>{
        setToggel(!toggel)
    }
    return (
        <div>
            <button onClick={handelToggel}>ADD</button>
            {toggel && <AddCourseForm />}
            <h1>Available courses-{courses.length}</h1>
            <CourseTable />
        </div>
    )
}
export default Course