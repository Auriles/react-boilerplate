/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';

class Cards1 extends Component {
    render() {
        return (
            <div className="body-cards1">
                <div className="container-cards1">
                    <div class="p-1 shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl">
                        <a class="block p-6 bg-white sm:p-8 rounded-xl" href="">
                            <div class="mt-16 sm:pr-8">
                            <h5 class="text-xl font-bold text-gray-900">Science of Chemistry</h5>

                            <p class="mt-2 text-sm text-gray-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, adipisci.
                            </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards1;