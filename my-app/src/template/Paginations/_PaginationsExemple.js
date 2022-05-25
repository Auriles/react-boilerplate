/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import Paginations1 from './_Paginations1';
import Paginations2 from './_Paginations2';
import Paginations3 from './_Paginations3';
import Paginations4 from './_Paginations4';
import Paginations5 from './_Paginations5';

class PaginationssExemple extends Component {
    render() {
        return (
            <>
                <Paginations1 />
                <Paginations2 />
                <Paginations3 />
                <Paginations4 />
                <Paginations5 />
            </>
        );
    }
}

export default PaginationssExemple;