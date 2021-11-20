import axios from 'axios'
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
                    console.log(admin.errors)
                } else {
                    console.log(admin)
                    dispatch(adminLogin(admin))
                    localStorage.setItem('token', admin.token)
                    alert('successfully logged in')
                    props.history.push('/')
                    props.handelAuth() 
                } 
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
}