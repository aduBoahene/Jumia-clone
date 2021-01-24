import React, { useState } from 'react';
import {AttemptLogin} from "../../store/action";
import { useDispatch, useSelector } from "react-redux";
import './Login.css';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';

import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';



const useStyles = makeStyles({
  root: {
    width: 350
  }
});



function Login() {

    const classes = useStyles();


    const dispatch = useDispatch();


    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [user,setUser]=useState({
        "email": '',
        "password": ''
      });

    const handleUsernameChange = (e)=>{
        console.log("email",e.target.value)
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e)=>{
        console.log("password",e.target.value)
        setPassword(e.target.value)
    }
    
    const doLogin =(user)=>{
        
        console.log("userToBeSent",user)
         dispatch(AttemptLogin(user));
               
    }

    return (
        <div className="Login">
            <div className="Login__left">
                <h4 className="Login__header">Login</h4>
                <div className="Login__form">
                    <TextField label="Email" fullWidth className="Login__username" name="username"
                             onChange={handleUsernameChange} value={email}/>
                    <TextField label="Password" fullWidth className="Login__password"
                             name="password" onChange={handlePasswordChange} value={password}/>

                    <div className="Login__footer">
                        <FormControlLabel control={<Checkbox name="checkedC" />} label="Remember me" />
                        <span style={{color:'#f68b1e'}}>Forget Password?</span>
                    </div>
                </div>

                <div className="Login__buttons">
                    <div className="Login__loginBtnOne" onClick={()=>doLogin({email,password})}>
                        <EmailOutlinedIcon />
                        <span>LOGIN</span>
                    </div>

                    <div className="Login__loginBtnTwo">
                        <FacebookIcon />
                        <span>LOGIN WITH FACEBOOK</span>
                    </div>
              
                </div>
            </div>

            <span className="divider"> </span>

            <div className="Login__right">
            <h4 className="Login__header">Create your Jumia account</h4>
                <p className="Login__createText">
                    Create your Jumia customer account in just a few clicks! You can register either using your e-mail 
                    address or through your Facebook account.
                </p>

                <div className="Login__buttonsTwo">
                    <div className="Login__loginBtnThree">
                        <EmailOutlinedIcon />
                        <span>CREATE AN ACCOUNT VIA EMAIL</span>
                    </div>

                    <div className="Login__loginBtnFour">
                        <EmailOutlinedIcon />
                        <span>REGISTER WITH FACEBOOK</span>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default Login
