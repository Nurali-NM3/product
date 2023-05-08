import axios from "axios";
import {ADD_PRODUCT, DECREASE_AMOUNT, GET_PRODUCT, INCREASE_AMOUNT} from "../Types";


export  const getProduct =()=>{
    return (dispatch)=>{
        axios('https://64363d318205915d34eec114.mockapi.io/users')
            .then(({data}) =>{
                dispatch({type: GET_PRODUCT,payload: data})
            })
    }
}
export const addProduct =(value)=> {
    return {type: ADD_PRODUCT, payload: value}
}

export const increaseAmount =(id)=>{
    return {type:INCREASE_AMOUNT, payload:id}
}
export const decreaseAmount =(id)=>{
    return{type: DECREASE_AMOUNT,payload:id}
}