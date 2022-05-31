/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class NavLinks extends Component {
    render() {
        return (
            <>
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
            </>
        );
    }
}

export default NavLinks;