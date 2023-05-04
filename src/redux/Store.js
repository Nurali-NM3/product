import {applyMiddleware, createStore} from "redux";
import productReducer from "./reducer/productReducer";
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk";


const store = createStore(
    productReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store