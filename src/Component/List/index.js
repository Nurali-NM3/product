import React from 'react';
import {useSelector} from "react-redux";

const List = () => {
    const dispatch = useDispatch()
    const product = useSelector(state => state.product)
    return (
        <div className={'container'}>
            
        </div>
    );
};

export default List;