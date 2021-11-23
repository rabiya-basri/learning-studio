const studentInitialState = {
    data:[]
}
const studentReducer = (state = studentInitialState, action) => {
    switch (action.type) {
        case 'GET_ALL_STUDENTS':{
            return { ...state, data: [...action.payload]}
        }
        default: {
            return {...state}
        }
    }
}
export default studentReducer