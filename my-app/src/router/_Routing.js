/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavLinks from "./_NavLinks";

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
import TablesExemple from "../template/Tables/_TablesExemple";
import CartsExemple from "../template/Carts/_CartsExemple";
import CheckoutsExemple from "../template/Checkouts/_CheckoutsExemple";
import ProductCardsExemple from "../template/ProductCards/_ProductCardsExemple";
import ProductCollectionsExemple from "../template/ProductCollections/_ProductCollectionsExemple";
import ProductsExemple from "../template/Products/_ProductsExemple";

// Layouts
import NavbarsExemple from "../template/Navbars/_NavbarsExemple";
import SectionsExemple from "../template/Sections/_SectionsExemple";
import BannersExemple from "../template/Banners/_BannersExemple";
import FooterExemple from "../template/Footers/_FooterExemple";
import HeadersExemple from "../template/Headers/_HeadersExemple";
import SideMenusExemple from "../template/SideMenus/_SideMenusExemple";

class Routing extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/side-menus-exemple" element={<SideMenusExemple />} />
                        <Route path="/headers-exemple" element={<HeadersExemple />} />
                        <Route path="/products-exemple" element={<ProductsExemple />} />
                        <Route path="/product-collections-exemple" element={<ProductCollectionsExemple />} />
                        <Route path="/product-cards-exemple" element={<ProductCardsExemple />} />
                        <Route path="/checkouts-exemple" element={<CheckoutsExemple />} />
                        <Route path="/carts-exemple" element={<CartsExemple />} />
                        <Route path="/tables-exemple" element={<TablesExemple />} />
                        <Route path="/steps-exemple" element={<StepsExemple />} />
                        <Route path="/radios-group-exemple" element={<RadiosGroupExemple />} />
                        <Route path="/stats-exemple" element={<StatsExemple />} />
                        <Route path="/testimonials-exemple" element={<TestimonialsExemple />} />
                        <Route path="/popups-exemple" element={<PopupsExemple />} />
                        <Route path="/paginations-exemple" element={<PaginationsExemple />} />
                        <Route path="/navbars-exemple" element={<NavbarsExemple />} />
                        <Route path="/inputs-exemple" element={<InputsExemple />} />
                        <Route path="/forms-exemple" element={<FormsExemple />} />
                        <Route path="/filters-exemple" element={<FiltersExemple />} />
                        <Route path="/faqs-exemple" element={<FaqsExemple />} />
                        <Route path="/sections-exemple" element={<SectionsExemple />} />
                        <Route path="/cards-exemple" element={<CardsExemple />} />
                        <Route path="/breadcrumbs-exemple" element={<BreadcrumbsExemple />} />
                        <Route path="/banners-exemple" element={<BannersExemple />} />
                        <Route path="/buttons-exemple" element={<ButtonsExemple />} />
                        <Route path="/buttons-group-exemple" element={<ButtonsGroupExemple />} />
                        <Route path="/footers-exemple" element={<FooterExemple />} />
                    </Routes>
                    <NavLinks />
                </BrowserRouter>
            </>
        );
    }
}

export default Routing;