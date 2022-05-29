/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import ProductCollections1 from './_ProductCollections1';
import ProductCollections2 from './_ProductCollections2';
import ProductCollections3 from './_ProductCollections3';
import ProductCollections4 from './_ProductCollections4';

class ProductCollectionsExemple extends Component {
    render() {
        return (
            <>
                <ProductCollections1 />
                <ProductCollections2 />
                <ProductCollections3 />
                <ProductCollections4 />
            </>
        );
    }
}

export default ProductCollectionsExemple;