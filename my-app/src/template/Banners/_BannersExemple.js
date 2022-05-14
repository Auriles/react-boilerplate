/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import Banners1 from "./_Banners1";
import Banners2 from "./_Banners2";
import Banners3 from "./_Banners3";

class BannersExemple extends Component {
    render() {
        return (
            <>
                <Banners1 />
                <Banners2 />
                <Banners3 />
            </>
        );
    }
}

export default BannersExemple;