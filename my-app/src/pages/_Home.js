/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';

// Components
import ButtonsExemple from '../template/Buttons/_ButtonsExemple';
import ButtonsGroupExemple from "../template/ButtonsGroup/_ButtonsGroupExemple";
import BreadcrumbsExemple from "../template/Breadcrumbs/_BreadcrumbsExemple";

// Layouts
import BannersExemple from "../template/Banners/_BannersExemple";
import FooterExemple from "../template/Footers/_FooterExemple";

class Home extends Component {
    render() {
        return (
            <>
                <BreadcrumbsExemple />
                <BannersExemple />
                <ButtonsExemple />
                <ButtonsGroupExemple />
                <FooterExemple />
            </>
        );
    }
}

export default Home;