import axios from "axios";


export  const getProduct =()=>{
    return (dispatch)=>{
        axios('https://64363d318205915d34eec114.mockapi.io/tasks')
            .then(({data}) =>{
                console.log(data)
                dispatch({type:'GET_PRODUCT',payload: data})
            })
    }
}