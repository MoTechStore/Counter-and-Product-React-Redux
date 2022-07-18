import { rootReducer } from "./rootReducer";
import thunk from "redux-thunk"
import { createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from "redux-devtools-extension"



let allMiddlewares = [thunk]
let store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...allMiddlewares)))

export {store}