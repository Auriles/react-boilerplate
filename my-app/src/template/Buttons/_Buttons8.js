/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';

class Buttons8 extends Component {
    render() {
        return (
            <div className="body-buttons8">
                <div className="container-buttons8">
                    {/* Left */}
                    <a class="relative inline-block px-8 py-3 overflow-hidden border border-indigo-600 group focus:outline-none focus:ring" href="/download">
                        <span class="absolute inset-y-0 left-0 w-[2px] transition-all bg-indigo-600 group-hover:w-full group-active:bg-indigo-500"></span>

                        <span class="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
                            Download
                        </span>
                    </a>

                    {/* Right */}
                    <a class="relative inline-block px-8 py-3 overflow-hidden border border-indigo-600 group focus:outline-none focus:ring" href="/download">
                        <span class="absolute inset-y-0 right-0 w-[2px] transition-all bg-indigo-600 group-hover:w-full group-active:bg-indigo-500"></span>

                        <span class="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
                            Download
                        </span>
                    </a>

                    {/* Bottom */}
                    <a class="relative inline-block px-8 py-3 overflow-hidden border border-indigo-600 group focus:outline-none focus:ring" href="/download">
                        <span class="absolute inset-x-0 bottom-0 h-[2px] transition-all bg-indigo-600 group-hover:h-full group-active:bg-indigo-500"></span>

                        <span class="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
                            Download
                        </span>
                    </a>

                    {/* Top */}
                    <a class="relative inline-block px-8 py-3 overflow-hidden border border-indigo-600 group focus:outline-none focus:ring" href="/download">
                        <span class="absolute inset-x-0 top-0 h-[2px] transition-all bg-indigo-600 group-hover:h-full group-active:bg-indigo-500"></span>

                        <span class="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
                            Download
                        </span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Buttons8;