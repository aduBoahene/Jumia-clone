import React from 'react'
import ProductCategory from '../ProductCategory/ProductCategory'
import './HorizontalListOfProducts.css'

export default function HorizontalListOfProducts() {
    return (
        <div className="horizontal">
            <ProductCategory heading="Recommended for you"/>
            <ProductCategory heading="Black friday Collections for you"/>
        </div>
    )
}
