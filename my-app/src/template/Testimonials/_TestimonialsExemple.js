/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import Testimonials1 from './_Testimonials1';
import Testimonials2 from './_Testimonials2';
import Testimonials3 from './_Testimonials3';

class TestimonialsExemple extends Component {
    render() {
        return (
            <>
                <Testimonials1 />
                <Testimonials2 />
                <Testimonials3 />
            </>
        );
    }
}

export default TestimonialsExemple;