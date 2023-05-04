import React from 'react';
import List from "../../Component/List";

const productPage = ({products}) => {
    return (
        <div>
            <List products={products}/>
        </div>
    );
};

export default productPage;