/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';

class Buttons1 extends Component {
    render() {
        return (
            <div className="body-buttons1">
                <div className="container-buttons1">
                    {/* Base */}
                    <a class="inline-block p-[2px] rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:text-white active:text-opacity-75 focus:outline-none focus:ring" href="/download">
                        <span class="block px-8 py-3 text-sm font-medium bg-white rounded-sm hover:bg-transparent">
                            Download
                        </span>
                    </a>

                    {/* Pill */}
                    <a class="inline-block p-[2px] rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:text-white active:text-opacity-75 focus:outline-none focus:ring" href="/download">
                        <span class="block px-8 py-3 text-sm font-medium bg-white rounded-full hover:bg-transparent">
                            Download
                        </span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Buttons1;