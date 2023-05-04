import {ADD_PRODUCT, GET_PRODUCT} from "../Types";


const initialState ={
    product:[],
    cards:[]
}


export default function productReducer(state=initialState,action){
    switch (action.type) {
        case GET_PRODUCT :
            return{...state, product: action.payload}
        case ADD_PRODUCT :
            return {...state,cards: state.product.find(card => card.id === action.payload.id)}
        default:
            return state
    }
}