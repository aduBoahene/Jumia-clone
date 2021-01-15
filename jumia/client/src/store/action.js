import axios from "axios";
import jwt from 'jsonwebtoken'

export const AttemptLogin = (user) => async (dispatch) => {
    await axios.post("http://localhost:4000/user/loginn",{
        "email":"duho",
        "password":"banku"
    })
      .then(res =>{
        localStorage.setItem('token', res.data.accessToken);
        dispatch(setCurrentUser(jwt.decode(res.data.accessToken)))
        window.location="/"
      }
      ).catch(err=>{
        console.log("login error",err.response)
      }); 
  };

  export const setCurrentUser=(user)=>{
    return {
      type:"SET_CURRENT_USER",
      payload:user
    }
  }

  