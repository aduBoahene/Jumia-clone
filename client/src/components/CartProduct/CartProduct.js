import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './CartProduct.css'
import image from '../../jumiaImages/3.png';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {useDispatch } from "react-redux";



const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

export default function CartProduct({name,oldAmount,newAmount,selectedValue,total,handleQuantityChange,handleRemoveIconClick}) {

    const options = ["1","2","3","4","5","6","7","8","9","10","11"]

    const classes = useStyles();
    const dispatch=useDispatch();

   

    return ( 
        <div className="cartProduct">

            <table>
                <Card style={{"marginBottom":"10px"}}>
                
                <tr className="cartProduct__cardInner">
                    <td> 
                        <img src={image} className="cartProduct__image"/>
                    </td>
                    <td>
                            <div className="cartProduct__description">
                                <span className="cartProduct__sellerName">
                                    Seller: Jumia
                                </span>
                                <span className="cartProduct__sellerName">
                                    <strong>{name}</strong>
                                </span>
                                <span className="cartProduct__sellerName">
                                    Variation: Yellow
                                </span>
                                <div className="cartProduct__options">
                                        <span className="cartProduct__favorite">
                                            <FavoriteBorderIcon/> <b>MOVE TO SAVE ITEMS</b>
                                        </span>
                                        <span className="cartProduct__delete">
                                            <DeleteOutlineIcon /> <b onClick={handleRemoveIconClick}>REMOVE</b>
                                        </span>
                                </div>
                                </div>
                   </td>
                   <td>
                   <select
                        name="Countries"
                        onChange={handleQuantityChange}
                        value={selectedValue}
                        >
                        <option value="">Quantity</option>
                        {options.map((option, key) => (
                            <option key={key} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                   {/* <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
                        <Select
                        value={selectedValue}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={handleQuantityChange}
                        >
                        {options.map(option=><MenuItem value={option}>{option}</MenuItem >)}
                        </Select>
                    </FormControl> */}
                   </td>
                    <td className="cartProduct__amount">
                        <span>{`GHC ${newAmount}`}</span>
                        <span style={{"textDecoration":"line-through"}}>{`GHC ${oldAmount}`}</span>
                    </td>
                    <td>
                        {total}
                    </td>
                </tr>
               
                </Card>
                
            </table>

            

            
        </div>
    )
}
	
