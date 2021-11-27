const studentInitialState = {
    isLoading:false,
    data:[]
}
const studentReducer = (state = studentInitialState, action) => {
    switch (action.type) {
        case 'REGISTER_STUDENT': {
            return {...state,data:[...state.data,{...action.payload}]}
        }
        case 'GET_ALL_STUDENTS':{
            return { ...state, data: [...action.payload]}
        }
        case 'GET_STUDENT': {
            return { data: [action.payload] }
        }
        case 'REMOVE_STUDENT': {
            return {
                ...state, data: [...state.data.filter((ele) => {
                return ele._id!==action.payload
            })]}
        }
        default: {
            return {...state}
        }
    }
}
export default studentReducer