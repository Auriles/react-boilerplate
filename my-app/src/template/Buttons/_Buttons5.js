/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';

class Buttons5 extends Component {
    render() {
        return (
            <>
                {/* Base */}
                <a class="inline-block px-8 py-3 text-sm font-medium text-white transition bg-indigo-600 rounded hover:scale-110 hover:shadow-xl active:bg-indigo-500 focus:outline-none focus:ring" href="/download">
                Download
                </a>

                {/* Border */}
                <a class="inline-block px-8 py-3 text-sm font-medium text-indigo-600 transition border border-current rounded hover:scale-110 hover:shadow-xl active:text-indigo-500 focus:outline-none focus:ring" href="/download">
                Download
                </a>
            </>
        );
    }
}

export default Buttons5;