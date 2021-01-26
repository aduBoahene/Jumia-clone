
const initialState = {
    products:[],
    cart:[]
}


export default function productsReducer(state=initialState,action){
    switch(action.type){
        case "SET_PRODUCTS":
        return {
            products:action.payload
        }
        case "ADD_TO_CART":
        return{
            cart:action.payload
        }
        default:
        return state;
    }
}