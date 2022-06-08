/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class NavLinks extends Component {
    render() {
        return (
            <div className="navlinks-container">

                <div className="neon-text">
                    <p>Layouts_</p>
                </div>

                <div className="navlinks">

                    <NavLink to="/side-menus-exemple">
                        <span>SideMenus</span>
                        <i></i>
                    </NavLink>

                    <NavLink to="/headers-exemple">
                        <span>Headers</span>
                        <i></i>
                    </NavLink>

                    <NavLink to="/products-exemple">
                        <span>Products</span>
                        <i></i>
                    </NavLink>

                    <NavLink to="/product-collections-exemple">
                        <span>ProductCollections</span>
                        <i></i>
                    </NavLink>
                </div>

                <div className="neon-text">
                    <p>Components_</p>
                </div>

                <div className="navlinks">
                    <NavLink to="/product-cards-exemple">
                        <span>ProductCards</span>
                        <i></i>
                    </NavLink>

                    <NavLink to="/checkouts-exemple">
                        <span>Checkouts</span>
                        <i></i>
                    </NavLink>

                    <NavLink to="/carts-exemple">
                        <span>Carts</span>
                        <i></i>
                    </NavLink>

                    <NavLink to="/tables-exemple">
                        <span>Tables</span>
                        <i></i>
                    </NavLink>
                </div>

                <div className="neon-text">
                    <p>Menus_</p>
                </div>

                <div className="navlinks">
                    <NavLink to="/steps-exemple">
                        <span>Steps</span>
                        <i></i>
                    </NavLink>

                    <NavLink to="/radios-group-exemple">
                        <span>RadiosGroup</span>
                        <i></i>
                    </NavLink>

                    <NavLink to="/stats-exemple">
                        <span>Stats</span>
                        <i></i>
                    </NavLink>

                    <NavLink to="/testimonials-exemple">
                        <span>Testimonials</span>
                        <i></i>
                    </NavLink>
                </div>

                <div className="navlinks">
                    <NavLink to="/popups-exemple">
                        <span>Popups</span>
                        <i></i>
                    </NavLink>

                    <NavLink to="/paginations-exemple">
                        <span>Paginations</span>
                        <i></i>
                    </NavLink>

                    <NavLink to="/navbars-exemple">
                        <span>Navbars</span>
                        <i></i>
                    </NavLink>

                    <NavLink to="/inputs-exemple">
                        <span>Inputs</span>
                        <i></i>
                    </NavLink>
                </div>

                <div className="navlinks">
                    <NavLink to="/forms-exemple">
                        <span>Forms</span>
                        <i></i>
                    </NavLink>

                    <NavLink to="/filters-exemple">
                        <span>Filters</span>
                        <i></i>
                    </NavLink>

                    <NavLink to="/faqs-exemple">
                        <span>Faqs</span>
                        <i></i>
                    </NavLink>

                    <NavLink to="/cards-exemple">
                        <span>Cards</span>
                        <i></i>
                    </NavLink>
                </div>

                <div className="navlinks">
                    <NavLink to="/breadcrumbs-exemple">
                        <span>Breadcrumbs</span>
                        <i></i>
                    </NavLink>

                    <NavLink to="/banners-exemple">
                        <span>Banners</span>
                        <i></i>
                    </NavLink>

                    <NavLink to="/buttons-exemple">
                        <span>Buttons</span>
                        <i></i>
                    </NavLink>

                    <NavLink to="/buttons-group-exemple">
                        <span>ButtonsGroup</span>
                        <i></i>
                    </NavLink>
                </div>

                <div className="navlinks">
                    <NavLink to="/footers-exemple">
                        <span>Footer</span>
                        <i></i>
                    </NavLink>

                    <NavLink to="/">
                        <span>Home</span>
                        <i></i>
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default NavLinks;