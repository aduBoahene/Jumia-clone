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
import {useFormik} from 'formik'



const useStyles = makeStyles({
  root: {
    width: 350
  }
});



function Login() {

    const dispatch = useDispatch();    

    const validate = (values)=>{
        const errors = {};
        
          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }

          if (!values.password) {
            errors.password = 'Required';
          } else if (values.password.length > 15) {
            errors.password = 'Must be 15 characters or less';
          }

        return errors;
    }

    const formik = useFormik({
         initialValues : {
            email:"",
            password:""
        },
        validate,
        onSubmit:values=>{
            console.log("data",values)
            dispatch(AttemptLogin(values));

        }
    });

    return (
        <div className="Login">
            <div className="Login__left">
                <h4 className="Login__header">Login</h4>

                <form onSubmit={formik.handleSubmit}>
                <TextField 
                            label="Email" 
                            fullWidth 
                            className="Login__username" 
                            name="email"
                            onChange={formik.handleChange} 
                            value={formik.values.email}
                            />
                {formik.errors.email ? <div className="login__error">{`*${formik.errors.email}`}</div>:null}


                    <TextField 
                                label="Password" 
                                fullWidth
                                type="password"
                                className="Login__password"
                                name="password" 
                                onChange={formik.handleChange} 
                                value={formik.values.password}
                                />
                    {formik.errors.password ? <div className="login__error">{`*${formik.errors.password}`}</div>:null}

                   <button type="submit" className="login__loginButton">Login</button>
                   <div className="Login__loginBtnTwo">
                        <FacebookIcon />
                        <span>LOGIN WITH FACEBOOK</span>
                    </div>
                </form>
                {/* <div className="Login__form">
                    <TextField label="Email" fullWidth className="Login__username" name="email"
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
              
                </div> */}
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
