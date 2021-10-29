import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import reposReducer from "../components/redux/reposReducer";

const rootReducer = combineReducers({
    reposReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk))

export default store;