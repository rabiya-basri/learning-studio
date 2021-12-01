import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AddCourseForm from './AddCourseForm'
import { startAllCourses } from '../../actions/courseAction'

const Course = (props) => {
    const dispatch = useDispatch()
    
    const courses = useSelector((state) => {
        return state.courses
    })
    console.log(courses)

    useEffect(() => {
       dispatch(startAllCourses()) 
    }, [])
    
    return (
        <div>
            <h1>Available courses-{courses.length}</h1>

            <AddCourseForm />
        </div>
    )
}
export default Course