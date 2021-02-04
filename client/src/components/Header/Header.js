import React, { useState } from 'react';
import { useSelector,useDispatch } from "react-redux";

import './Header.css';
import logo from '../../jumiaLogo.png';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineSharpIcon from '@material-ui/icons/PersonOutlineSharp';
import RedeemOutlinedIcon from '@material-ui/icons/RedeemOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';

import LocalActivityOutlinedIcon from '@material-ui/icons/LocalActivityOutlined';



import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const Header=()=> {

    const {user,isAuthenticated} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const {cart} = useSelector(state => state.productsReducer);

    console.log("cart",cart)



    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const logout=()=>{
        localStorage.setItem('token','');
        setAnchorEl(null);
        //dispatch Logout
        dispatch({
            type:"LOGOUT",
            payload:{}
        })

    }


    console.log("user for header",user)
   

    return (
        <div className="header">
            <div className="header__content">
            <Link to="/">
                    <div className="header__logo">
                       <img src={logo}/>
                    </div>
            </Link>

                    <div className="header__searchAndButton">
                        <div className="header__searchField">
                            <SearchIcon/>
                            <input placeholder="Search products,brands and categories"/>
                        </div>
                        <button className="header__searchButton">SEARCH</button>
                    </div>
                   

                    <div className="header__Options">
                        <div className="header__greeting">
                           {!isAuthenticated?(
                               <>
                                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                    <PersonOutlineSharpIcon/>
                                    <span className="header__userName">Login</span> <ArrowDropDownIcon/>
                                </Button>
                                <Menu 
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                getContentAnchorEl={null}
                                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                                transformOrigin={{ vertical: "top", horizontal: "center" }}
                                >
                                <MenuItem onClick={handleClose}>
                                <Link to="/login" style={{ textDecoration: 'none',color:'white' }}>
                                     <button className="header__menuLoginButton">
                                       LOGIN
                                    </button>
                                </Link>
                                </MenuItem>
                                <hr className="header__menuDivider"/>
                                <span className="header__creatAccount">
                                    <Link to="/CreateAccount" style={{ textDecoration: 'none',color:'orange' }}>CREATE ACCOUNT</Link></span>
                                <MenuItem onClick={handleClose}><PersonOutlineSharpIcon/><span className="header__IconText">Account</span></MenuItem>
                                <MenuItem onClick={handleClose}><RedeemOutlinedIcon/><span className="header__IconText">Orders</span></MenuItem>
                                <MenuItem onClick={handleClose}><FavoriteBorderOutlinedIcon/><span className="header__IconText">Saved Items</span></MenuItem>
                        </Menu> 
                        </>
                           ):(<>
                            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                    <span className="Header__username">Hi, {user.firstname}</span><ArrowDropDownIcon/>
                            </Button>
                            <Menu 
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                getContentAnchorEl={null}
                                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                                transformOrigin={{ vertical: "top", horizontal: "center" }}
                                >
                                <MenuItem onClick={handleClose}><PersonOutlineSharpIcon/><span className="header__IconText">Account</span></MenuItem>
                                <MenuItem onClick={handleClose}><RedeemOutlinedIcon/><span className="header__IconText">Orders</span></MenuItem>
                                <MenuItem onClick={handleClose}><FavoriteBorderOutlinedIcon/><span className="header__IconText">Saved Items</span></MenuItem>
                                <MenuItem onClick={handleClose}><LocalActivityOutlinedIcon/><span className="header__IconText">Jumia Credit</span></MenuItem>
                                <hr/>
                                <Link onClick={logout}><span className="header__creatAccount">LOGOUT</span></Link>
                        </Menu> 
                           </>
                           )}
                            
                        </div>

                        <div className="header__help">
                            <Button aria-controls="help-menu" aria-haspopup="true" onClick={handleClick}>
                                <HelpOutlineIcon/><span className="header__userHelp">Help</span>
                            </Button>
                            {/* <Menu 
                                    id="help-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                    getContentAnchorEl={null}
                                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                                    transformOrigin={{ vertical: "top", horizontal: "center" }}
                                    >
                                   
                                    <hr className="header__menuDivider"/>
                                    <MenuItem onClick={handleClose}>Help Center</MenuItem>
                                    <MenuItem onClick={handleClose}>Place & track order</MenuItem>
                                    <MenuItem onClick={handleClose}>Order cancellation</MenuItem>
                                    <MenuItem onClick={handleClose}>Returns & refunds</MenuItem>
                                    <MenuItem onClick={handleClose}>Payment & Jumia account</MenuItem>


                            </Menu>  */}
                            
                        </div>

                        <Link to="/Cart" style={{"text-decoration":"none","color":"black"}}>
                            <div className="header__cart">
                                
                                {cart.length==0?(
                                    <>
                                    <Badge color="secondary">
                                        <ShoppingCartOutlinedIcon/>
                                    </Badge>
                                <span className="header__cart">Cart</span>
                                </>
                                ):(
                                    <>
                                    <Badge badgeContent={cart.length} color="secondary">
                                        <ShoppingCartOutlinedIcon/>
                                    </Badge>
                                <span className="header__cart">Cart</span>
                                </>
                                )}                            
                            </div>
                        </Link>
                    </div>

               
            </div>
        </div>
    )
}

export default Header;
