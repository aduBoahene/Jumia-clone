import axios from "axios";
import jwt from 'jsonwebtoken'

export const AttemptLogin = (user) => async (dispatch) => {

  console.log("user in action",user);
    
     await axios.post("/user/loginn",user)
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

  
export const Register = (user) => async (dispatch) => {

  console.log("user in register",user);
    
     await axios.post("/user/Register",user)
      .then(res =>{
        window.location="/login"
        console.log("registered user", res)
      }
      ).catch(err=>{
        console.log("login error",err.response)
      }); 
  };

  export const GetAllProducts = () => async (dispatch) => {
       
       await axios.get("/product/getAllProducts")
        .then(res =>{
          //dispatch all products to store
          dispatch({
            type:"SET_PRODUCTS",
            payload:res.data
          });
        }
        ).catch(err=>{
          console.log("login error",err.response)
        }); 
 };


 
 export const SendEmail = (userEmail) => async (dispatch) => {
       console.log("mail object",userEmail)
  await axios.post("/product/sendMail",{
      "from":"boahenepatrick2@gmail.com",
      "to":userEmail,
      "subject":"Jumia",
      "text":"Your order has been proccesed",
  })
   .then(res =>{
     //dispatch all products to store
     dispatch({
       type:"SEND_MAIL",
       payload:res.data
     });
   }
   ).catch(err=>{
     console.log("email error",err.response)
   }); 
};

  