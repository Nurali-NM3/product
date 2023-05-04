import React from 'react';
import List from "../../Component/List";
import Hero from "../../Component/Hero";
import ImgsCompany from "../../Component/imgsCompany";
const HomePage = ({products}) => {
    const img = products.filter((img,idx) => idx ===0 )
    return (
        <div>
            <Hero img={img}/>
            <ImgsCompany/>
       <List products={products}/>
        </div>
    );
};

export default HomePage;