/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';

class RadiosGroup1 extends Component {
    render() {
        return (
            <>
                <div class="space-y-4">
                    <div>
                        <input class="hidden peer" type="radio" name="shippingOption" value="standard" id="standard" />

                        <label class="flex items-center justify-between p-4 text-sm font-medium transition-colors border border-gray-100 rounded-lg shadow-sm cursor-pointer peer-checked:border-blue-500 hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-blue-500" for="standard">
                        <span> Standard </span>

                        <span> Free </span>
                        </label>
                    </div>

                    <div>
                        <input class="hidden peer" type="radio" name="shippingOption" value="next_day" id="next_day" />

                        <label class="flex items-center justify-between p-4 text-sm font-medium transition-colors border border-gray-100 rounded-lg shadow-sm cursor-pointer peer-checked:border-blue-500 hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-blue-500" for="next_day">
                        <span> Next Day </span>

                        <span> $5.99 </span>
                        </label>
                    </div>
                </div>
            </>
        );
    }
}

export default RadiosGroup1;