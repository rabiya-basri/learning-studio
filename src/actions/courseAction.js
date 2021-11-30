import axios from 'axios'
//Get all corse data
export const getCourses = () => {
    return {
        type:'GET_ALL_COURSES'
    }
}
export const startGetCourses=() => {
    return (dispatch) => {
        axios.get('https://dct-e-learning.herokuapp.com/api/courses', {
            headers: {
                'Authorization':localStorage.getItem('token')
            }
        })
        .then((response) => {
            const result = response.data
            console.log(result)
            dispatch(getCourses(result))

        })
            .catch((err) => {
            console.log(err.message)
        })
    }
}

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
                console.log(result)
                dispatch(addCourse(result))
            })
            .catch((err) => {
            console.log(err.message)
        })
    }
}