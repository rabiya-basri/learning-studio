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