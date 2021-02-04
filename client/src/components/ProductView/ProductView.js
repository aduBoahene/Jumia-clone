import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import './ProductView.css';
import image from '../../jumiaImages/3.png';
import { ADD_TO_CART } from '../../store/types';


export default function ProductView() {

    const dispatch = useDispatch()
    const {id} = useParams()
    const {products} = useSelector(state => state.productsReducer);
    console.log("products from store",products)

    const productToBeViewed = products.data.filter(product=>product.product_id == id)
    console.log(productToBeViewed)

    return (
        <div className="productView">
            <div className="productView__inner">
                <div className="productView__imageBackground">
                <img src={image} />
                </div>
                <div className="productView__details">
                    <span className="productView__shippedFromAbroad">Shipped from abroad</span>
                    <h6>{productToBeViewed[0].product_name}</h6>
                    <p>Brand: Incerun | Similar products from Incerun</p>
                    <p></p>
                    <hr/>
                    <div className="productView__pricing">
                        <span className="productView__newAmount">{`GHC ${productToBeViewed[0].price}`}</span>
                        <span className="productView__oldAmount">{`GHC ${productToBeViewed[0].price}`}</span>
                    </div>

                    <button onClick={()=>dispatch({type:ADD_TO_CART,payload:productToBeViewed})}>ADD TO CART</button>

                </div>
                <div className="productView__delivery">

                </div>

            </div>
        </div>
    )
}
