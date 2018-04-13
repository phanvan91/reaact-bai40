import React, { Component } from 'react';
import Product from './../components/Product';
import Products from "./../components/Products";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
class ProductsContainers extends Component {

    render() {
        var {products} = this.props;
        return (
            <Products>
                {this.showProducts(products)}
            </Products>
        );


    }

    showProducts = (products) => {
        var result = null;
        if(products.length > 0){
            result = products.map((product,index)=>{
                return <Product  key={index} product={product}/>
            })
        }
        return result;
    }

}

ProductsContainers.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image:PropTypes.string.isRequired,
            description:PropTypes.string.isRequired,
            price:PropTypes.number.isRequired,
            iventory:PropTypes.number.isRequired,
            rating:PropTypes.number.isRequired
        })
    ).isRequired
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}


export default connect(mapStateToProps,null)(ProductsContainers);
