import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Cart from "../components/Cart";
import * as Message from './../constants/Message';
import CartItem from "../components/CartItem";
import CartReult from "../components/CartReult";
import {actRemoveProducInCart , actChangeMessage, actUpdateProductInCart} from './../actions'
import message from "../reducers/message";




class CartContainer extends Component {

    render() {
        var {cart} = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );


    }

    showCartItem = (cart) => {
        var {onDeleteProductInCart,onChangeMessage,onUpdateProductInCart} = this.props;
        var result = <tr><td>{Message.MSG_CART_EMPRY}</td></tr>;
        if(cart.length > 0){
            result = cart.map((item,index)=>{
                return <CartItem key={index} onUpdateProductInCart={onUpdateProductInCart} item={item} index={index}  onDeleteProductInCart={onDeleteProductInCart} onChangeMessage={onChangeMessage} />
            })
        }
        return result;
    }

    showTotalAmount = (cart) =>{
        var result = null;
        if(cart.length > 0){
            result = <CartReult cart={cart} />
        }
        return result;
    }

}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
            product : PropTypes.shape({
                id:PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image:PropTypes.string.isRequired,
                description:PropTypes.string.isRequired,
                price:PropTypes.number.isRequired,
                iventory:PropTypes.number.isRequired,
                rating:PropTypes.number.isRequired
            }).isRequired,
        quantity: PropTypes.number.isRequired
        })
    ).isRequired
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        onDeleteProductInCart : (product) => {
            dispatch(actRemoveProducInCart(product));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message))
        },
        onUpdateProductInCart: (product,quantity) =>{
            dispatch(actUpdateProductInCart(product,quantity))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);
