/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';

class Sections2 extends Component {
    render() {
        return (
            <>
                <aside
                class="p-12 pt-48 sm:p-16 sm:pt-64 bg-gradient-to-r from-purple-600 to-blue-500"
                >
                    <div class="sm:items-end sm:justify-between sm:flex">
                        <div class="max-w-xl">
                        <p class="text-3xl font-bold text-white sm:text-4xl">
                            Lorem ipsum dolor sit amet, consectetur adipisicing.
                        </p>
                        </div>

                        <a
                        href=""
                        class="inline-block px-8 py-4 mt-4 text-blue-500 bg-white rounded-lg shadow-lg hover:opacity-75 sm:mt-0 sm:ml-8"
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5 sm:h-8 sm:w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                        </a>
                    </div>
                </aside>
            </>
        );
    }
}

export default Sections2;