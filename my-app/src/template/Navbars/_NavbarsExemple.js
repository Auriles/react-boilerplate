/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import Navbars1 from './_Navbars1';
import Navbars2 from './_Navbars2';
import Navbars3 from './_Navbars3';
import Navbars4 from './_Navbars4';

class NavbarsExemple extends Component {
    render() {
        return (
            <>
                <Navbars1 />
                <Navbars2 />
                <Navbars3 />
                <Navbars4 />
            </>
        );
    }
}

export default NavbarsExemple;