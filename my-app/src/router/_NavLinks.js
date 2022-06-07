/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class NavLinks extends Component {
    render() {
        return (
            <div className="navlinks-container">
                <div className="navlinks">
                    <NavLink to="/side-menus-exemple">
                        <span>SideMenusExemple</span>
                        <i></i>
                    </NavLink>

                    <NavLink to="/headers-exemple">
                        <span>HeadersExemple</span>
                        <i></i>
                    </NavLink>

                    <NavLink to="/products-exemple">
                        <span>ProductsExemple</span>
                        <i></i>
                    </NavLink>

                    <NavLink to="/product-collections-exemple">
                        <span>ProductCollectionsExemple</span>
                        <i></i>
                    </NavLink>
                </div>

                <div className="navlinks">
                    <NavLink to="/product-cards-exemple">
                        <span>ProductCardsExemple</span>
                        <i></i>
                    </NavLink>

                    <NavLink to="/checkouts-exemple">
                        <span>CheckoutsExemple</span>
                        <i></i>
                    </NavLink>

                    <NavLink to="/carts-exemple">
                        <span>CartsExemple</span>
                        <i></i>
                    </NavLink>

                    <NavLink to="/tables-exemple">
                        <span>TablesExemple</span>
                        <i></i>
                    </NavLink>
                </div>

                <div className="navlinks">
                    <NavLink to="/steps-exemple">
                        <span>StepsExemple</span>
                        <i></i>
                    </NavLink>

                    <NavLink to="/radios-group-exemple">
                        <span>RadiosGroupExemple</span>
                        <i></i>
                    </NavLink>

                    <NavLink to="/stats-exemple">
                        <span>StatsExemple</span>
                        <i></i>
                    </NavLink>

                    <NavLink to="/testimonials-exemple">
                        <span>TestimonialsExemple</span>
                        <i></i>
                    </NavLink>
                </div>

                <div className="navlinks">
                    <NavLink to="/popups-exemple">
                        <span>PopupsExemple</span>
                        <i></i>
                    </NavLink>

                    <NavLink to="/paginations-exemple">
                        <span>PaginationsExemple</span>
                        <i></i>
                    </NavLink>

                    <NavLink to="/navbars-exemple">
                        <span>NavbarsExemple</span>
                        <i></i>
                    </NavLink>

                    <NavLink to="/inputs-exemple">
                        <span>InputsExemple</span>
                        <i></i>
                    </NavLink>
                </div>

                <div className="navlinks">
                    <NavLink to="/forms-exemple">
                        <span>FormsExemple</span>
                        <i></i>
                    </NavLink>

                    <NavLink to="/filters-exemple">
                        <span>FiltersExemple</span>
                        <i></i>
                    </NavLink>

                    <NavLink to="/faqs-exemple">
                        <span>FaqsExemple</span>
                        <i></i>
                    </NavLink>

                    <NavLink to="/cards-exemple">
                        <span>CardsExemple</span>
                        <i></i>
                    </NavLink>
                </div>

                <div className="navlinks">
                    <NavLink to="/breadcrumbs-exemple">
                        <span>BreadcrumbsExemple</span>
                        <i></i>
                    </NavLink>

                    <NavLink to="/banners-exemple">
                        <span>BannersExemple</span>
                        <i></i>
                    </NavLink>

                    <NavLink to="/buttons-exemple">
                        <span>ButtonsExemple</span>
                        <i></i>
                    </NavLink>

                    <NavLink to="/buttons-group-exemple">
                        <span>ButtonsGroupExemple</span>
                        <i></i>
                    </NavLink>
                </div>

                <div className="navlinks">
                    <NavLink to="/footers-exemple">
                        <span>FooterExemple</span>
                        <i></i>
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default NavLinks;