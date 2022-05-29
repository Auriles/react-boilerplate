/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import ProductCards1 from './_ProductCards1';
import ProductCards2 from './_ProductCards2';
import ProductCards3 from './_ProductCards3';
import ProductCards4 from './_ProductCards4';
import ProductCards5 from './_ProductCards5';

class ProductCardsExemple extends Component {
    render() {
        return (
            <>
                <ProductCards1 />
                <ProductCards2 />
                <ProductCards3 />
                <ProductCards4 />
                <ProductCards5 />
            </>
        );
    }
}

export default ProductCardsExemple;