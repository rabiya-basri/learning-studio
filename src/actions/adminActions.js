import axios from 'axios'
 import jwt_decode from 'jwt-decode'

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