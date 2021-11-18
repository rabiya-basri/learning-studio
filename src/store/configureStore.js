import { createStore, combineReducers, applyMiddleware } from "redux";
import adminReducer from "../reducers/adminReducer";
import thunk from 'redux-thunk'

const configureStore = () => {
    const store = createStore(combineReducers({
        admin:adminReducer
 }),applyMiddleware(thunk))
    return store
}


export  default configureStore