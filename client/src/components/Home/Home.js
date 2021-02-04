import React from 'react'
import Bread from '../Bread/Bread'
import HorizontalListOfProducts from '../HorizontalListOfProducts/HorizontalListOfProducts'
import Jumbo from '../Jumbotron/jumbotron'

export default function Home() {

    const products = [
        {
            "product_name":"Nasco TV",
            "price":20,
            "category":"Electronics"
        },
        {
            "product_name":"Apple TV",
            "price":20,
            "category":"Home Appliances"
        },
        {
            "product_name":"Samsung LED TV",
            "price":20,
            "category":"Fashion"
        }
        
    ];

    return (
        <div className="Home">
            
            <div className="jumb">
            <Jumbo/>
            </div>
            <div className="bread">
            <Bread/>
            </div>
            <div className="products">
                <HorizontalListOfProducts />
            </div>
        </div>
    )
}
