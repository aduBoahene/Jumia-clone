
const initialState = {
    isLoading:false,
    products:[],
    cart:[]
}


export default function productsReducer(state=initialState,action){
    switch(action.type){
        case "SET_LOADING":
            return {
                ...state, 
                isLoading:true,
            }
        case "SET_PRODUCTS":
        return {
            ...state, 
            isLoading:false,
            products:action.payload
        }
        case "DELETE_PRODUCT":
            return {
                ...state,
                cart:[...state.cart.filter(item=>item.product_id!==action.payload.product_id)]
            }
        case "ADD_TO_CART":
        return{
            ...state,
            cart:[...state.cart.concat(action.payload)]
        }
        default:
        return state;
    }
}