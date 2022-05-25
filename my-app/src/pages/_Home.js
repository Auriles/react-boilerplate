/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';

// Components
import ButtonsExemple from '../template/Buttons/_ButtonsExemple';
import ButtonsGroupExemple from "../template/ButtonsGroup/_ButtonsGroupExemple";
import BreadcrumbsExemple from "../template/Breadcrumbs/_BreadcrumbsExemple";
import CardsExemple from "../template/Cards/_CardsExemple";
import FaqsExemple from "../template/FAQ/_FaqsExemple";
import FiltersExemple from "../template/Filters/_FiltersExemple";
import FormsExemple from "../template/Forms/_FormsExemple";
import InputsExemple from "../template/Inputs/_InputsExemple";
import PaginationsExemple from "../template/Paginations/_PaginationsExemple";
import PopupsExemple from "../template/Popups/_PopupsExemple";
import TestimonialsExemple from "../template/Testimonials/_TestimonialsExemple";
import StatsExemple from "../template/Stats/_StatsExemple";
import RadiosGroupExemple from "../template/RadiosGroup/_RadiosGroupExemple";
import StepsExemple from "../template/Steps/_StepsExemple";


// Layouts
import NavbarsExemple from "../template/Navbars/_NavbarsExemple";
import SectionsExemple from "../template/Sections/_SectionsExemple";
import BannersExemple from "../template/Banners/_BannersExemple";
import FooterExemple from "../template/Footers/_FooterExemple";

// Three
// import Cube from "../three/_Cube";

class Home extends Component {
    render() {
        return (
            <>
                <StepsExemple />
                <RadiosGroupExemple />
                <StatsExemple />
                <TestimonialsExemple />
                {/* <PopupsExemple /> */}
                <PaginationsExemple />
                <NavbarsExemple />
                <InputsExemple />
                <FormsExemple />
                <FiltersExemple />
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