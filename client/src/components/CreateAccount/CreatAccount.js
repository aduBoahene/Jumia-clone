import { Checkbox, FormControlLabel, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import './CreateAccount.css';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useDispatch } from 'react-redux';
import { Register } from '../../store/action';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
  }));

export default function CreateAccount() {
    const classes = useStyles();

    const [firstname,setFirstname]=useState("");
    const [lastname,setLastname]=useState("");

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const [phone,setPhone]=useState("");

    const handlePhoneChange=(e)=>{
        setPhone(e.target.value)
    }

    const handlefirstnameChange=(e)=>{
        setFirstname(e.target.value)
    }

    const handlelastnameChange=(e)=>{
        setLastname(e.target.value)
    }

    const handleEmailChange=(e)=>{
        setEmail(e.target.value)
    }

    const handlePasswordChange=(e)=>{
        setPassword(e.target.value)
    }

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });

    
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };


      const dispatch = useDispatch();

      const doRegister=(user)=>{
        dispatch(Register(user))
        console.log("user to be sent", user)
      }



    return (
        <div className="createAccount">
            <h4 className="createAccount__header">Create Account</h4>
            <div className="createAccount__body">
                <TextField label="Firstname" fullWidth className="creatAccount__firstname" 
                name="firstname" onChange={handlefirstnameChange} value={firstname}/>
                <TextField label="Lastname" fullWidth className="creatAccount__lastname" 
                name="lastname" onChange={handlelastnameChange} value={lastname}/>
                
            </div>
            <div className="createAccount__body">
                {/* <TextField label="Email" fullWidth className="creatAccount__email" 
                name="email" onChange={handleEmailChange} value={email}/> */}
                {/* <TextField label="Password" fullWidth className="creatAccount__lastname" 
                name="lastname" onChange={handlePasswordChange} value={password}/> */}
                <FormControl className="createAccount__password">
                    <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                    />  
                </FormControl>

                <FormControl className="createAccount__password">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={handlePasswordChange}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                        }
                    />  
                </FormControl>
                
            </div>

            <div className="createAccount__bodyThree">
                <TextField label="Prefix" fullWidth className="creatAccount__firstname" disabled
                name="Prefix" value="+233"/>
                <TextField label="Phone Number" fullWidth className="creatAccount__lastname" 
                name="phoneNumber" onChange={handlePhoneChange} value={phone}/>
                
            </div>

             <div className="createAccount__body">
                    <FormControlLabel control={<Checkbox name="checkedC" />} />
                    <span style={{color:'#f68b1e'}}>I want to receive Jumia Newsletters with the best deals and offers</span>
              </div> 


              <div className="createAccount__body">
                    
                    <div className="createAccount__one">
                        <span onClick={()=>doRegister({firstname ,lastname,email,phone,password})}>CREATE ACCOUNT</span>
                    </div>

              </div> 

               <div className="createAccount__body">
                    
                    <div className="createAccount__two">
                        <span>REGISTER WITH FACEBOOK</span>
                    </div>

              </div>                           

        </div>
    )
}
