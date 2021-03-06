/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';

class Inputs2 extends Component {
    render() {
        return (
            <div className='body-inputs2'>
                <div className="container-inputs2">
                    <div class="relative">
                        <label class="sr-only" for="email"> Email </label>

                        <input
                            class="w-full py-3 pl-3 pr-12 text-sm border-2 border-gray-200 rounded"
                            id="email"
                            type="email"
                            placeholder="Email"
                        />

                        <span class="absolute text-gray-500 -translate-y-1/2 pointer-events-none top-1/2 right-4">
                            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                        </span>
                    </div>
                </div>

            </div>
        );
    }
}

export default Inputs2;