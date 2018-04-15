import * as type from './../constants/ActionType';
var data = JSON.parse(localStorage.getItem('CART'));

var initialState;
initialState = data ? data :[];

;

const cart = (state = initialState, action) => {
    var {product,quantity} = action;
    var index = -1;

    switch (action.type) {
        case type.ADD_TO_CART:
            index = findProductIncart(state,product);
            if(index !== -1){
                state[index].quantity += quantity;
            }else{
                state.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem('CART',JSON.stringify(state));
            return[...state];
        case type.DELETE_PRODUCT_IN_CART:
            index = findProductIncart(state,product);
            if(index !==-1){
                state.splice(index,1);
            }
            // console.log(action);
            localStorage.setItem('CART',JSON.stringify(state));
            return[...state];
        case type.UPDATE_PRODUCT_IN_CART:
            index = findProductIncart(state,product);
            if(index !== -1){
                state[index].quantity = quantity
            }
            localStorage.setItem('CART',JSON.stringify(state));
            return[...state];
        default:return[...state];
    }
}

var findProductIncart = (carts,product) =>{
    var index = -1;
    if(carts.length>0){
        carts.map((cart,i)=>{
            if(cart.product.id === product.id){
                index = i;
            }
        })
    }
    return index;
}
export default cart;