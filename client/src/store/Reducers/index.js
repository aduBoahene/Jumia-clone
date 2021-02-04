import {combineReducers} from 'redux'
import auth from './authReducer'
import other from './other'
import productsReducer from './productsReducer'



export default combineReducers({
    auth,productsReducer
})