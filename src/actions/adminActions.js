import axios from 'axios'
import jwt_decode from 'jwt-decode'
import swal from 'sweetalert'

//actionGenerator for admin registration
export const adminRegister = (formData) => {
    return {
        type: 'ADMIN_REGISTER',
        payload:formData
    }
}

export const startAdminRegister = (formData,props) => {
    return (dispatch) => {
        axios.post(`https://dct-e-learning.herokuapp.com/api/admin/register`, formData)
            .then((response) => {
                const admin = response.data
                if (Object.keys(admin).includes('errors')) {
                    alert(admin.errors)
                } else {
                    dispatch(adminRegister(response.data.notice))
                    alert(response.data.notice)
                    props.history.push('/admin/login')     
                } 
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

//actiongenerator for login
export const adminLogin = (formData) => {
    return {
        type: 'lOGIN_ADMIN',
        payload:formData
    }
}

export const startAdminLogin = (formData,props) => {
    return (dispatch) => {
        axios.post(`https://dct-e-learning.herokuapp.com/api/admin/login`, formData)
            .then((response) => {
                //console.log(response)
                const admin = response.data
                if (Object.keys(admin).includes('errors')) {
                    alert(admin.errors)
                } else {
                    // const result=jwt(admin.token)
                    console.log(admin)
                    //dispatch(adminLogin(admin))
                    localStorage.setItem('token', admin.token)
                    dispatch(startAdminDetails())
                    alert('successfully logged in')
                    props.history.push('/')
                    props.handelAuth() 
                } 
            })
            .catch((err) => {
               alert(err.message)
            })
    }
}

//getting admindetails- GET()
export const adminDetails = (result) => {
    return {
        type: 'ADMIN_DETAILS',
        payload:result
    }
}

export const startAdminDetails = () => {
    return (dispatch) => {
        axios.get('https://dct-e-learning.herokuapp.com/api/admin/account', {
            headers: {
                'Authorization':localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result=response.data
                console.log(result)
                dispatch(adminDetails(result))
            })
            .catch((err) => {
            alert(err.message)
        })
    }
}

//Editadmin details-PUT()
export const editAdmin = (formData) => {
    return {
        type: 'EDIT_ADMIN',
        payload:formData
    }
}

export const startEditAdmin = (formData) => {
    return (dispatch) => {
        axios.put(`https://dct-e-learning.herokuapp.com/api/admin`, formData, {
            headers: {
                'Authorization':localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result=response.data
                //console.log(result)
                dispatch(editAdmin(result))
                alert('successfully edited')
            })
            .catch((err) => {
            alert(err.message)
        })
    }
}
//student login

export const startLoginStudent = (formData,props) => {
    return (dispatch) => {
        axios.post('https://dct-e-learning.herokuapp.com/api/students/login', formData)
            .then((response) => {
                const token=response.data.token
               // console.log('student token',token)
                localStorage.setItem('token', token)
                const student = jwt_decode(token)
                dispatch(startStudentDetails(student._id))
                alert('successfully loggedin')
                props.history.push('/')
                props.handelAuth() 
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

//getting studentdetails- GET()
export const studentDetails = (result) => {
    return {
        type: 'STUDENT_DETAILS',
        payload:result
    }
}

export const startStudentDetails = (_id) => {
    return (dispatch) => {
        axios.get(`https://dct-e-learning.herokuapp.com/api/students/${_id}`, {
            headers: {
                'Authorization':localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result=response.data
                console.log(result)
                dispatch(studentDetails(result))
            })
            .catch((err) => {
            alert(err.message)
        })
    }
}


//courses

//create course-post
export const addCourse=(formData)=>{
    return {
        type: 'ADD_COURSE',
        payload:formData
    }
}
export const startAddCourse = (formData) => {
    return (dispatch) => {
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
//to view particular course details
export const courseDetails = (_id) => {
    return {
        type: 'COURSE_DETAILS',
        payload:_id
    }
}

export const startCourseDetails = (_id) => {
    return (dispatch) => {
        axios.get(`https://dct-e-learning.herokuapp.com/api/courses/${_id}`, {
            headers: {
                'Authorization':localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result=response.data
                swal({
                    title: `Course: ${result.name}`,
                    text:`Description: ${result.description}\n Category: ${result.category}\n Level: ${result.level}\n Author: ${result.author}\n duration: ${result.duration} months`,
                    button:'close'
                })
                console.log(result)
            })
            .catch((err) => {
            console.log(err.message)
        })
    }
}
//remove particular course
export const removeCourse = (_id) => {
    return {
        type: 'REMOVE_COURSE',
        payload:_id
    }
}
export const startRemoveCourse = (_id) => {
    return (dispatch) => {
        axios.delete(`https://dct-e-learning.herokuapp.com/api/courses/${_id}`, {
            headers: {
                'Authorization':localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data
                dispatch(removeCourse(result._id))
            })
            .catch((err) => {
            console.log(err.message)
        })
    }
}