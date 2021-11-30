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
        case 'EDIT_STUDENT': {
            const result = state.data.map((ele) => {
                if (ele._id === action.payload._id) {
                    return {...ele,...action.payload}
                } else {
                    return {...ele}
                }
            })
            return {...state,data:[...result]}
        }
        default: {
            return {...state}
        }
    }
}
export default studentReducer