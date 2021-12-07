const adminInitialState = {
    data: {},
    courses:[]
}
const adminReducer = (state=adminInitialState,action) => {
    switch (action.type) {
        case 'ADMIN_DETAILS': {
            return {...state,data:{...action.payload}}
        }
        case 'EDIT_ADMIN': {
            return {...state,data:{...action.payload}}
        }
        case "ADD_COURSE": {
            return {...state,courses: [...state.courses,{...action.payload}]}
        }
         case "GET_ALL_COURSES": {
            return {...state,courses:[...action.payload]}
        }
        case "REMOVE_COURSE": {
             const result = state.courses.filter((ele) => {
                   return ele._id!==action.payload
             })
             return {...state,courses:[...result]}
        }
        default: {
            return {...state}
        }
    }
}

export default adminReducer