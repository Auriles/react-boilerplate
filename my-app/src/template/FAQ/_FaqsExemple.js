/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import Faqs1 from './_Faqs1';
import Faqs2 from './_Faqs2';
import Faqs3 from './_Faqs3';
import Faqs4 from './_Faqs4';
import Faqs5 from './_Faqs5';


class FaqsExemple extends Component {
    render() {
        return (
            <>
                <Faqs1 />
                <Faqs2 />
                <Faqs3 />
                <Faqs4 />
                <Faqs5 />
            </>
        );
    }
}

export default FaqsExemple;