/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';

class Buttons3 extends Component {
    render() {
        return (
            <div className="body-buttons3">
                <div className="container-buttons3">
                    {/* Base */}
                    <a class="relative inline-block text-sm font-medium text-indigo-600 group active:text-indigo-500 focus:outline-none focus:ring" href="/download">
                        <span class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-indigo-600 group-hover:translate-y-0 group-hover:translate-x-0"></span>

                        <span class="relative block px-8 py-3 bg-white border border-current">
                            Download
                        </span>
                    </a>

                    {/* Hover */}
                    <a class="relative inline-block text-sm font-medium text-indigo-600 group active:text-indigo-500 focus:outline-none focus:ring" href="/download">
                        <span class="absolute inset-0 transition-transform translate-x-0 translate-y-0 bg-indigo-600 group-hover:translate-y-0.5 group-hover:translate-x-0.5"
                        ></span>

                        <span class="relative block px-8 py-3 bg-white border border-current">
                            Download
                        </span>
                    </a>
                </div>

            </div>
        );
    }
}

export default Buttons3;