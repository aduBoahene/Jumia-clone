import React, { useEffect } from 'react'
import './ProductCategory.css'


export default function ProductCategory({image,productName,newAmount,oldAmount,handleProductClick}) {

    return (
        <div className="productCategory">
            {/* <span className="productCategory__heading">
                {heading}
            </span> */}
            <div className="productCategory__singleProduct" onClick={handleProductClick}>
                <img src={image} />
                <div className="productCategory__productDetails" >
                    <span>{productName}</span>
                    <span className="productCategory___newAmount">{newAmount}</span>
                    <span className="productCategory__oldAmount">{oldAmount}</span>
                </div>

            </div>  
        </div>
    )
}
