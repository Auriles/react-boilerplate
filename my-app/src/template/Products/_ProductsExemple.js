/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import Products1 from './_Products1';
import Products2 from './_Products2';

class ProductsExemple extends Component {
    render() {
        return (
            <>
                <Products1 />
                <Products2 />
            </>
        );
    }
}

export default ProductsExemple ;