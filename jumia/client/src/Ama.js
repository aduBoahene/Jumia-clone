import React from 'react';
import jwt_decode from 'jwt-decode';
import { useDispatch, useSelector } from "react-redux";




function Ama() {

    const state = useSelector(state=>state)
    console.log("object",state)
    //var token = 'eyJ0eXAiO.../// jwt token';

    // var decoded = jwt_decode(token);
    // console.log("decoded jwt",decoded);

    return (
        <div>
            Hello Ama
        </div>
    )
}

export default Ama




