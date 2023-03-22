import {combineReducers, createStore} from "redux";
import {contactReducer} from "./contact-reducer";

const reducers = combineReducers({
    Users: contactReducer,
})

const store = createStore(reducers)

export default store;