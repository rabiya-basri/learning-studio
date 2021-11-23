import axios from 'axios'
import swal from 'sweetalert'

//student Registration
export const registerStudent = (formData) => {
    return {
        type: 'REGISTER_STUDENT',
        payload:formData
    }
}

export const startRegisterStudent = (formData) => {
    return (dispatch) => {
        axios.post(`https://dct-e-learning.herokuapp.com/api/admin/students`, formData, {
            headers: {
                'Authorization':localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result=response.data
                console.log(result)
                dispatch(registerStudent(result))
                alert('Successfully registered student')
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
}

//student login
export const loginStudent = (formData) => {
    return {
        type: 'LOGIN_STUDENT',
        payload:formData
    }
}

export const startLoginStudent = (formData) => {
    return (dispatch) => {
        axios.post('https://dct-e-learning.herokuapp.com/api/students/login', formData)
            .then((response) => {
                const token=response.data.token
                console.log('student token',token)
                dispatch(loginStudent(token))
                localStorage.setItem('token',token)
                alert('successfully loggedin')
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
}

//get all student info
export const allStudents = (result) => {
    return {
        type: 'GET_ALL_STUDENTS',
        payload:result
    }
}
export const startAllStudents = () => {
    return (dispatch) => {
        axios.get('https://dct-e-learning.herokuapp.com/api/admin/students', {
            headers: {
                'Authorization':localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result=response.data
                console.log(result)
                dispatch(allStudents(result))
            })
            .catch((err) => {
            console.log(err.message)
        })
    }
}

//get particular student info
export const getStudent = (_id) => {
    return {
        type: 'GET_STUDENT',
        payload:_id
    }
}

export const startGetStudent = (_id) => {
    return (dispatch) => {
        axios.get(`https://dct-e-learning.herokuapp.com/api/students/${_id}`, {
            headers: {
                'Authorization':localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data
                swal({
                    title: `Name: ${result.name}`,
                    text:`Email: ${result.email}`,
                    button:'close'
                })
                console.log(result)
            })
            .catch((err) => {
            console.log(err.message)
        })
    } 
    
}

//Edit StudentDetails actions
export const editStudent = (_id) => {
    return {
        type: 'EDIT_STUDENT',
        payload:_id
    }
}

export const startEditStudent = (_id,formData) => {
    return (dispatch) => {
        axios.put(`https://dct-e-learning.herokuapp.com/api/students/${_id}`, formData, {
            headers: {
                'Authorization':localStorage.getItem('token')
            }
        })
            .then((response) => {
            console.log(response.data)
            })
            .catch((err) => {
            console.log(err.message)
        })
    }
}
