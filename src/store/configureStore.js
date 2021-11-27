import { createStore, combineReducers, applyMiddleware } from "redux";
import adminReducer from "../reducers/adminReducer";
import studentReducer from "../reducers/studentReducer";
import courseReducer from "../reducers/courseReducer";
import thunk from 'redux-thunk'

const configureStore = () => {
    const store = createStore(combineReducers({
        admin: adminReducer,
        students: studentReducer,
        courses:courseReducer
 }),applyMiddleware(thunk))
    return store
}


export  default configureStore