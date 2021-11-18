import axios from 'axios'

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
                dispatch(adminRegister(response.data.notice))
                alert(response.data.notice)
                props.history.push('/admin/login')
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}