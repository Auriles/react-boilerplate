/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

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

// Three
// import Cube from "../three/_Cube";

class Home extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                <div className="navlinks">
                    <NavLink to="/side-menus-exemple">SideMenusExemple</NavLink>
                    <NavLink to="/headers-exemple">HeadersExemple</NavLink>
                    <NavLink to="/products-exemple">ProductsExemple</NavLink>
                    <NavLink to="/product-collections-exemple">ProductCollectionsExemple</NavLink>
                    <NavLink to="/product-cards-exemple">ProductCardsExemple</NavLink>
                    <NavLink to="/checkouts-exemple">CheckoutsExemple</NavLink>
                    <NavLink to="/carts-exemple">CartsExemple</NavLink>
                    <NavLink to="/tables-exemple">TablesExemple</NavLink>
                    <NavLink to="/steps-exemple">StepsExemple</NavLink>
                    <NavLink to="/radios-group-exemple">RadiosGroupExemple</NavLink>
                    <NavLink to="/stats-exemple">StatsExemple</NavLink>
                    <NavLink to="/testimonials-exemple">TestimonialsExemple</NavLink>
                    <NavLink to="/popups-exemple">PopupsExemple</NavLink>
                    <NavLink to="/paginations-exemple">PaginationsExemple</NavLink>
                    <NavLink to="/navbars-exemple">NavbarsExemple</NavLink>
                    <NavLink to="/inputs-exemple">InputsExemple</NavLink>
                    <NavLink to="/forms-exemple">FormsExemple</NavLink>
                    <NavLink to="/filters-exemple">FiltersExemple</NavLink>
                    <NavLink to="/faqs-exemple">FaqsExemple</NavLink>
                    <NavLink to="/sections-exemple">SectionsExemple</NavLink>
                    <NavLink to="/cards-exemple">CardsExemple</NavLink>
                    <NavLink to="/breadcrumbs-exemple">BreadcrumbsExemple</NavLink>
                    <NavLink to="/banners-exemple">BannersExemple</NavLink>
                    <NavLink to="/buttons-exemple">ButtonsExemple</NavLink>
                    <NavLink to="/buttons-group-exemple">ButtonsGroupExemple</NavLink>
                    <NavLink to="/footers-exemple">FooterExemple</NavLink>
                </div>
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
                </BrowserRouter>
            </>
        );
    }
}

export default Home;