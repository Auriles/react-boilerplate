/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';

class Inputs1 extends Component {
    render() {
        return (
            <>
                <div class="relative">
                    <label class="block text-xs font-medium text-gray-500" for="email"> Email </label>

                    <input class="w-full p-3 mt-1 text-sm border-2 border-gray-200 rounded" id="email" type="email" />
                </div>
            </>
        );
    }
}

export default Inputs1;