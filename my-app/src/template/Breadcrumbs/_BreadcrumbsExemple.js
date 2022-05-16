/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import Breadcrumbs1 from "./_Breadcrumbs1";
import Breadcrumbs2 from "./_Breadcrumbs2";

class BreadcrumbsExemple extends Component {
    render() {
        return (
            <>
                <Breadcrumbs1 />
                <Breadcrumbs2 />
            </>
        );
    }
}

export default BreadcrumbsExemple;