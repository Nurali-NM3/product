import {ADD_PRODUCT, DECREASE_AMOUNT, GET_PRODUCT, INCREASE_AMOUNT} from "../Types";


const initialState ={
    product:[],
    carts:[]
}


export default function productReducer(state=initialState,action){
    switch (action.type) {
        case GET_PRODUCT :
            return{...state, product: action.payload}
        case ADD_PRODUCT :
            return {...state,carts:[...state.carts,{...action.payload,amount :action.payload.amount -1,amountCart: 1} ]}
        case INCREASE_AMOUNT:
            return  {...state,carts:state.carts.map(cart => cart.id ===action.payload ?
                    {...cart, amountCart:cart.amountCart +1
                        ,amount:cart.amount -1}: cart)}
        case DECREASE_AMOUNT:
            return {...state,carts: state.carts.map(cart => cart.id ===action.payload ?
                    {...cart, amountCart:cart.amountCart -1
                        ,amount:cart.amount +1}: cart)}
        default:
            return state
    }
}