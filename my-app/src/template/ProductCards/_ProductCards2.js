/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';

class ProductCards2 extends Component {
    render() {
        return (
            <>
                <a class="block" href="/product/limited-edition-sports-trainer">
                    <div class="flex justify-center">
                        <strong class="relative h-6 px-4 text-xs leading-6 text-white uppercase bg-black">
                        New
                        </strong>
                    </div>

                    <img
                        alt="Trainer Product"
                        src="https://images.unsplash.com/photo-1491553895911-0055eca6402d"
                        class="object-cover w-full -mt-3 h-[350px] sm:h-[450px]"
                    />

                    <h5 class="mt-4 text-sm text-gray-700">
                        Limited Edition Sports Trainer
                    </h5>

                    <div class="flex items-center justify-between mt-4 font-medium">
                        <p>
                        $189.99
                        </p>

                        <p class="text-xs tracking-wide uppercase">
                        6 Colors
                        </p>
                    </div>
                </a>
            </>
        );
    }
}

export default ProductCards2;