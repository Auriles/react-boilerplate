/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';

// Components
import ButtonsExemple from '../template/Buttons/_ButtonsExemple';
import ButtonsGroupExemple from "../template/ButtonsGroup/_ButtonsGroupExemple";
import BreadcrumbsExemple from "../template/Breadcrumbs/_BreadcrumbsExemple";
import CardsExemple from "../template/Cards/_CardsExemple";
import FaqsExemple from "../template/FAQ/_FaqsExemple";

// Layouts
import SectionsExemple from "../template/Sections/_SectionsExemple";
import BannersExemple from "../template/Banners/_BannersExemple";
import FooterExemple from "../template/Footers/_FooterExemple";

class Home extends Component {
    render() {
        return (
            <>
                <FaqsExemple />
                <SectionsExemple />
                <CardsExemple />
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