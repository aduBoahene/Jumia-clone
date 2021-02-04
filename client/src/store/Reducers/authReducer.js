
const initialState = {
    isAuthenticated:false,
    user:{}
}


export default function authReducer(state=initialState,action){
    switch(action.type){
        case "SET_CURRENT_USER":
        return {
            isAuthenticated: true,
            user:action.payload
        }
        case "LOGOUT":
            return {
                isAuthenticated: false,
                user:{}
            }
        default:
        return state;
    }
}