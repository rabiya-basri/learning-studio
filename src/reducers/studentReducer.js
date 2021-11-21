const studentInitialState = {
    data:[]
}
const studentReducer = (state = studentInitialState, action) => {
    switch (action.type) {
        case 'REGISTER_STUDENT':{
            return { ...state, data: [...state.data,action.payload]}
        }
        default: {
            return {...state}
        }
    }
}
export default studentReducer