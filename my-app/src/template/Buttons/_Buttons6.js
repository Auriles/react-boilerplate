/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';

class Buttons6 extends Component {
    render() {
        return (
            <div className="body-buttons6">
                <div className="container-buttons6">
                    {/* Base - Right */}
                    <a class="inline-block px-8 py-3 text-sm font-medium text-white transition bg-indigo-600 rounded hover:scale-110 hover:rotate-2 active:bg-indigo-500 focus:outline-none focus:ring" href="/download">
                    Download
                    </a>

                    {/* Border - Right */}
                    <a class="inline-block px-8 py-3 text-sm font-medium text-indigo-600 transition border border-current rounded hover:scale-110 hover:rotate-2 active:text-indigo-500 focus:outline-none focus:ring" href="/download">
                    Download
                    </a>

                    {/* Base - Left */}
                    <a class="inline-block px-8 py-3 text-sm font-medium text-white transition bg-indigo-600 rounded hover:scale-110 hover:-rotate-2 active:bg-indigo-500 focus:outline-none focus:ring" href="/download">
                    Download
                    </a>

                    {/* Border - Left */}
                    <a class="inline-block px-8 py-3 text-sm font-medium text-indigo-600 transition border border-current rounded hover:scale-110 hover:-rotate-2 active:text-indigo-500 focus:outline-none focus:ring" href="/download">
                    Download
                    </a>
                </div>
            </div>
        );
    }
}

export default Buttons6;