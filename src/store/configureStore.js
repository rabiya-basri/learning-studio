import { createStore, combineReducers } from "redux";
import adminReducer from "../reducers/adminReducer";

const configureStore = () => {
    const store = createStore(combineReducers({
        admin:adminReducer
 }))
    return store
}


export  default configureStore