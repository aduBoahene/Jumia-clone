import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import productsReducer from '../../store/Reducers/productsReducer';
import CardProduct from '../CartProduct/CartProduct'
import "./Cart.css"

import {Link} from 'react-router-dom'
import {SendEmail} from "../../store/action";

import { makeStyles } from '@material-ui/core/styles';
import {Alert,AlertTitle } from '@material-ui/lab';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));



export default function Cart() {

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const dispatch=useDispatch();

    const {cart, mailSent} = useSelector(state=>state.productsReducer);
    const {user} = useSelector(state => state.auth);


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

    const goHome =()=>{
      setOpen(false);
      window.location = "/"
    }

    const sendMail=()=>{

      //req.body.from,req.body.to,req.body.subject,req.body.text
      console.log("sending mail..........");

      const mailObject = {
        "from":"boahenepatrick2@gmail.com",
        "to":user.email,
        "subject":"Jmia",
        "text":"Your order has been proccesed",
      }
      dispatch(SendEmail(mailObject));
    }


    return (
        <div className="cart">
            <div className="cart__inner">
            {mailSent ? <div>
              <Collapse in={open}>
              <Alert severity="success" action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        goHome();
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }>
              <AlertTitle>Success</AlertTitle>
              Checkout Successful, email sent — <strong>check it out!</strong>
            </Alert>
               
            </Collapse></div>:null}
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
