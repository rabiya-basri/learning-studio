import axios from 'axios'

export const adminRegister = (formData) => {
    return {
        type: 'ADMIN_REGISTER',
        payload:formData
    }
}

export const startAdminRegister = (formData) => {
    return (dispatch) => {
        axios.post(`https://dct-e-learning.herokuapp.com/api/admin/register`, formData)
            .then((response) => {
                alert(response.data.notice)
                dispatch(adminRegister(response.data.notice))

            })
            .catch((err) => {
                alert(err.message)
            })
    }
}