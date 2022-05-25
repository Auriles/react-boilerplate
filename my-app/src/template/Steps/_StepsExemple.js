/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import Steps1 from './_Steps1';
import Steps2 from './_Steps2';
import Steps3 from './_Steps3';
import Steps4 from './_Steps4';
import Steps5 from './_Steps5';
import Steps6 from './_Steps6';

class StepsExemple extends Component {
    render() {
        return (
            <>
                <Steps1 />
                <Steps2 />
                <Steps3 />
                <Steps4 />
                <Steps5 />
                <Steps6 />
            </>
        );
    }
}

export default StepsExemple;