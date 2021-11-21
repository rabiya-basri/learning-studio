import axios from 'axios'

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
                alert(err.message)
            })
    }
}