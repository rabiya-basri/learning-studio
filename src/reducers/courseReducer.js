const courseInitialState = []

const courseReducer = (state = courseInitialState, action) => {
    switch (action.type) {
        case "GET_ALL_COURSES": {
            return [...action.payload]
       }
        default: {
            return [...state]
        }
    }
}
export default courseReducer