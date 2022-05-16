/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import Sections1 from './_Sections1';
import Sections2 from './_Sections2';
import Sections3 from './_Sections3';
import Sections4 from './_Sections4';
import Sections5 from './_Sections5';

class SectionsExemple extends Component {
    render() {
        return (
            <>
                <Sections1 />
                <Sections2 />
                <Sections3 />
                <Sections4 />
                <Sections5 />
            </>
        );
    }
}

export default SectionsExemple ;