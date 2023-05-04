import {ADD_PRODUCT, GET_PRODUCT} from "../Types";


const initialState ={
    product:[],
    carts:[]
}


export default function productReducer(state=initialState,action){
    switch (action.type) {
        case GET_PRODUCT :
            return{...state, product: action.payload}
        case ADD_PRODUCT :
            return {...state,carts:[...state.carts,action.payload]}
        default:
            return state
    }
}