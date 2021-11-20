const adminInitialState = {
    data:{}
}
const adminReducer = (state=adminInitialState,action) => {
    switch (action.type) {
        case 'lOGIN_ADMIN': {
            return {...state,data:{...action.payload}}
        }
        default: {
            return {...state}
        }
    }
}

export default adminReducer