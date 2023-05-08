import React, {useState} from 'react';
import './style.scss'
import {useDispatch, useSelector} from "react-redux";
import {addProduct, increaseAmount} from "../../redux/action/productAction";


const List = ({products}) => {
    const carts = useSelector(state => state.carts)
    const dispatch = useDispatch()
    const [fullImg,setFullImg] = useState({})
    const [showImg,setShowImg] = useState(false)
    console.log(carts)
    const handleAddCart =(product)=>{
        if (carts.find(carts => carts.id === product.id)){
            dispatch(increaseAmount(product.id))
        }else {
            const newValue = {...product, amountCart: 1}
            dispatch(addProduct(newValue))
        }

    }
    const handleShowImg =(id)=>{
        setFullImg(products.find(el => el.id ===id))
            setShowImg(true)
    }
    return (
        <div className={'container'}>
            <div className="productList">

                    {
                        products.map(product =>{
                            return <div key={product.id} className="productList-wrapper ">
                                {
                                    showImg &&
                                    <div className={'productList-fullImg'}>
                                        <div className={'productList-fullImg__img'}>
                                            <button onClick={()=>setShowImg(false)}>X</button>
                                            <img  src={fullImg.imageUrl} alt=""/>
                                        </div>
                                    </div>
                                }
                            <div className="productList-box" >
                                <p className={"productList-box__discount"}>Get up to {product.discount}% off Today Only!</p>
                                <img className={'productList-box__img'} src={product.imageUrl} alt=""/>
                                    <div className="productList-box__action">
                                        <div className={'wrapper-buttons'}>
                                            <button onClick={()=>handleAddCart(product)} >
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.81815 16.2727C7.21982 16.2727 7.54543 15.9471 7.54543 15.5454C7.54543 15.1438 7.21982 14.8182 6.81815 14.8182C6.41649 14.8182 6.09088 15.1438 6.09088 15.5454C6.09088 15.9471 6.41649 16.2727 6.81815 16.2727Z" stroke="#030D15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M14.8182 16.2727C15.2198 16.2727 15.5454 15.9471 15.5454 15.5454C15.5454 15.1438 15.2198 14.8182 14.8182 14.8182C14.4165 14.8182 14.0909 15.1438 14.0909 15.5454C14.0909 15.9471 14.4165 16.2727 14.8182 16.2727Z" stroke="#030D15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M1 1H3.90909L5.85818 10.7382C5.92469 11.073 6.10684 11.3738 6.37276 11.5879C6.63868 11.8019 6.97142 11.9156 7.31273 11.9091H14.3818C14.7231 11.9156 15.0559 11.8019 15.3218 11.5879C15.5877 11.3738 15.7699 11.073 15.8364 10.7382L17 4.63636H4.63636" stroke="#030D15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </button>
                                            <button onClick={()=>handleShowImg(product.id)}>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="#030D15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M19 18.9999L14.65 14.6499" stroke="#030D15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M9 6V12" stroke="#030D15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    <path d="M6 9H12" stroke="#030D15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </button>
                                            <button>
                                                <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20.2913 2.61183C19.7805 2.10083 19.1741 1.69547 18.5066 1.41891C17.8392 1.14235 17.1238 1 16.4013 1C15.6788 1 14.9634 1.14235 14.2959 1.41891C13.6285 1.69547 13.022 2.10083 12.5113 2.61183L11.4513 3.67183L10.3913 2.61183C9.3596 1.58013 7.96032 1.00053 6.50129 1.00053C5.04226 1.00053 3.64298 1.58013 2.61129 2.61183C1.5796 3.64352 1 5.04279 1 6.50183C1 7.96086 1.5796 9.36013 2.61129 10.3918L3.67129 11.4518L11.4513 19.2318L19.2313 11.4518L20.2913 10.3918C20.8023 9.88107 21.2076 9.27464 21.4842 8.60718C21.7608 7.93972 21.9031 7.22431 21.9031 6.50183C21.9031 5.77934 21.7608 5.06393 21.4842 4.39647C21.2076 3.72901 20.8023 3.12258 20.2913 2.61183V2.61183Z" stroke="#030D15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                <div className="productList-box__description">
                                    <h3>{product.productName}</h3>
                                    <h4>{product.price}</h4>
                                    <h4>{product.rate}</h4>
                                </div>
                                {
                                    carts.map((cart) =>
                                        cart.amount ===0 && cart.id ===product.id ?
                                            <div key={cart.id} className={"productList-box__isOver"}>
                                                <h4>this product is over</h4>
                                            </div>
                                            :null
                                    )

                                }
                            </div>
                            </div>
                        })
                    }
            </div>
        </div>
    );
};

export default List;