import React, { Component } from 'react';

class CartReult extends Component {
    render() {
        var {cart} = this.props;
        // console.log(cart)
        return (
            <tr>
                <td colSpan="3"></td>
                <td>
                    <h4>
                        <strong>Tổng Tiền</strong>
                    </h4>
                </td>
                <td>
                    <h4>
                        <strong>{this.showTotalAmount(cart)}$</strong>
                    </h4>
                </td>
                <td colSpan="3">
                    <button type="button"
                            className="btn btn-primary waves-effect waves-light">Complete purchase
                        <i className="fa fa-angle-right right"></i>
                    </button>
                </td>
            </tr>
        );
    }
    showTotalAmount = (cart)=> {
        var total = 0;
        if(cart.length > 0){
            cart.map((Cart) => {
                total += Cart.product.price * Cart.quantity
            })
        }
        return total;
    }
}

export default CartReult;
