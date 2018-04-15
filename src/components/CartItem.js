import React, { Component } from 'react';
import * as Message from './../constants/Message';
class CartItem extends Component {
    // constructor(props){
    //     super(props);
    //     this.state ={
    //         quantity:1
    //     }
    // }
    render() {
        var {item} = this.props;
        // var{quantity} = item.quantity > 0 ? item : this.state;
        return (
            <tr>
                <th scope="row">
                    <img
                        src={item.product.image}
                        alt="" className="img-fluid z-depth-0"/>
                </th>
                <td>
                    <h5>
                        <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td>{item.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty"> {item.quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label
                            onClick={()=>this.onUpdateQuantity(item.product,item.quantity -1 )}
                            className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light">
                            <a>—</a>
                        </label>
                        <label
                            onClick={()=>this.onUpdateQuantity(item.product,item.quantity +1  )}
                            className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light">
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{this.showSubTotal(item.product.price,item.quantity)}$</td>
                <td>
                    <button onClick={()=>this.onDelete(item.product)} type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top" title="" data-original-title="Remove item">X</button>
                </td>
            </tr>
        );
    }
    onDelete = (product) => {
        this.props.onDeleteProductInCart(product);
        this.props.onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCESS);
    }
    showSubTotal = (price,quantity) => {
        return price * quantity;
    }
    onUpdateQuantity = (product,quantity) =>{
        if(quantity>0){
            this.props.onUpdateProductInCart(product,quantity);
            this.props.onChangeMessage(Message.MSG_UPDATE_CART_SUCESS);
        }
    }
}

export default CartItem;
