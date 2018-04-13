import * as type from './../constants/ActionType';
var data = JSON.parse(localStorage.getItem('CART'));

var initialState;
initialState = [
    {
        product: {
            id:1,
            name:'iphone7plus',
            image:'https://clickbuy.com.vn/wp-content/uploads/2017/01/iphone6Plus_thumb_SILVER-300x350.jpg',
            description:'San pham do apple gia cong',
            price:500,
            iventory:10,
            rating:4
        },
        quantity: 5
    },
    {
        product: {
            id:2,
            name:'iphone6plus',
            image:'https://www.didongviet.vn/pub/media/catalog/product//i/p/iphone-6-plus-quoc-te-64gb-didongviet.jpg',
            description:'San pham do apple gia cong',
            price:500,
            iventory:10,
            rating:3
        },
        quantity: 4
    }
];

const cart = (state = initialState, action) => {
    switch (action.type) {
        case type.ADD_TO_CART:
            console.log(action)
            return[...state];
        default:return[...state];
    }
}


export default cart;