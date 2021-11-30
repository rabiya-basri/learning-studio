import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startGetCourses } from '../../actions/courseAction'
import AddCourseForm from './AddCourseForm'

const Course = (props) => {
    const dispatch = useDispatch()
    
    const courses = useSelector((state) => {
        return state.courses
    })

    useEffect(() => {
       dispatch(startGetCourses)
    },[])
    return (
        <div>
            <h1>Available courses-{courses.length}</h1>
            <AddCourseForm />
        </div>
    )
}
export default Course