import axios from 'axios'

//create course-post
export const addCourse=(formData)=>{
    return {
        type: 'ADD_COURSE',
        payload:formData
    }
}
export const startAddCourse = (formData) => {
    return (dispatch) => {
        console.log(formData)
        axios.post('https://dct-e-learning.herokuapp.com/api/courses', formData, {
            headers: {
                'Authorization':localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data
                //console.log(result)
                dispatch(addCourse(result))
                alert('SuccessFully added course')
            })
            .catch((err) => {
            console.log(err.message)
        })
    }
}
//to get all courses
export const allCourses = (courseData) => {
    return {
        type: 'GET_ALL_COURSES',
        payload:courseData
    }
}
export const startAllCourses = () => {
    return (dispatch) => {
        axios.get('https://dct-e-learning.herokuapp.com/api/courses', {
            headers: {
                'Authorization':localStorage.getItem('token')
            }
        })
            .then((response) => {
                const courseData = response.data
                console.log(courseData)
                dispatch(allCourses(courseData))
            })
            .catch((err) => {
            console.log(err.message)
        })
    }
}