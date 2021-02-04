import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import productsReducer from '../../store/Reducers/productsReducer';
import CardProduct from '../CartProduct/CartProduct'
import "./Cart.css"

import {Link} from 'react-router-dom'



export default function Cart() {
  const dispatch=useDispatch();

    const {cart} = useSelector(state=>state.productsReducer);
    console.log("cart",cart)

    const [totalValue, setTotalValue] = useState(1)
    const [selectedValue, setSelectedValue] = useState(1)
    const [grandTotal, setGrandTotal] = useState(4536)
    
    const handleQuantityChange = (e)=>{
      e.preventDefault();
      setSelectedValue(e.target.value)
      const gr=cart.map()
    }

    const handleRemoveIconClick = (product)=>{
       console.log("object",product)

        dispatch({
            type:"DELETE_PRODUCT",
            payload:product
        })
    }

    const sendMail=()=>{
      console.log("sending mail..........");
    }


    return (
        <div className="cart">
            <div className="cart__inner">
                {(cart.length==0)?(
                     <h4 className="cart__item">You have ({cart.length}) item/s in your cart</h4>
                ):(
                    <>
                    <h4 className="cart__item">You have ({cart.length}) items in your Cart </h4>
                    <span>Jumia items on your cart are eligible for Free Shipping. </span>
                    </>
                )}
                {cart && cart.map((product,index)=><CardProduct key={product.product_name}
                        name={product.product_name} 
                        oldAmount={product.price} 
                        newAmount={product.price}
                        selectedValue={selectedValue}
                        total={selectedValue * product.price}
                        handleQuantityChange={e=>handleQuantityChange(e)}
                        handleRemoveIconClick = {(e)=>handleRemoveIconClick(product)}
                        />)}
                      
            </div>
            <div className="cart__totalAmount">
                    <span className="cart__totalAmountValue">Total: <b className="cart__value">{`GHC ${grandTotal}`}</b></span>
            </div>

            <div className="cart__shoppingProceed">
              <div className="cart__buttons">
                <button className="cart__continue"><Link to="/" className="cart__Link">CONTINUE SHOPPING</Link></button>
                <button className="cart__proceed" onClick={sendMail} >PROCEED TO CHECKOUT</button>
              </div>
                                  
            </div>

           

        </div>
    )
}
