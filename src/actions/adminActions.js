import axios from 'axios'
// import jwt from 'jwt-decode'

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
                    dispatch(adminLogin(admin))
                    localStorage.setItem('token', admin.token)
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
                //console.log(result)
                dispatch(adminDetails(result))
            })
            .catch((err) => {
            alert(err.message)
        })
    }
}