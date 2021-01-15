import {combineReducers} from 'redux'
import auth from './authReducer'
import other from './other'


export default combineReducers({
    auth
})