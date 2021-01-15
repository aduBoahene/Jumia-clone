import React from 'react'
import './ProductCategory.css'

export default function ProductCategory({heading}) {
    return (
        <div className="productCategory">
            <span className="productCategory__heading">
                {heading}
            </span>
        </div>
    )
}
