import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductCategory from '../ProductCategory/ProductCategory'
import './HorizontalListOfProducts.css'
import image from '../../jumiaImages/3.png';
import  {GetAllProducts} from '../../store/action'
import { useHistory } from 'react-router-dom';


export default function HorizontalListOfProducts({heading}) {

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(GetAllProducts());
    },[]);

    let history = useHistory();

    const {products} = useSelector(state => state.productsReducer);
    console.log("product list data",products.data);

    return (
        <div className="horizontal">
            <p className="color:white">{heading}</p>
            {products.data && products.data.map(product=>(<ProductCategory 
                    key={product.product_id}
                    image={image} 
                    productName={product.product_name}
                    oldAmount={`GHC ${product.price}`}
                    newAmount={`GHC ${product.price}`}
                    // image="../../../public/logo512.png"
                    // image={`image${product.product_image}.jpg`}
                    handleProductClick={()=>history.push(`/productView/${product.product_id}`)}
                    />))}
            
        </div>
    )
}


