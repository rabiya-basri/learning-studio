const adminInitialState = {
    data:{}
}
const adminReducer = (state=adminInitialState,action) => {
    switch (action.type) {
        case 'ADMIN_DETAILS': {
            return {...state,data:{...action.payload}}
        }
        case 'EDIT_ADMIN': {
            return {...state,data:{...action.payload}}
        }
        default: {
            return {...state}
        }
    }
}

export default adminReducer