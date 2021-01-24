
const initialState = {
    products:[]
}


export default function productsReducer(state=initialState,action){
    switch(action.type){
        case "SET_PRODUCTS":
        return {
            products:action.payload
        }
        default:
        return state;
    }
}