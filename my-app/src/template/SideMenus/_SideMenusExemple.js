/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import SideMenus1 from './_SideMenus1';
import SideMenus2 from './_SideMenus2';
import SideMenus3 from './_SideMenus3';
import SideMenus4 from './_SideMenus4';
import SideMenus5 from './_SideMenus5';

class SideMenusExemple extends Component {
    render() {
        return (
            <>
                <SideMenus1 />
                <SideMenus2 />
                <SideMenus3 />
                <SideMenus4 />
                <SideMenus5 />
            </>
        );
    }
}

export default SideMenusExemple;