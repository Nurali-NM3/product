import {logDOM} from "@testing-library/react";

const initialState ={
    product:[]
}


export default function productReducer(state=initialState,action){
    switch (action.type) {
        case 'GET_PRODUCT' :
            return console.log(state)
        default:
            return state
    }
}