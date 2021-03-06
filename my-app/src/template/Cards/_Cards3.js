/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';

class Cards3 extends Component {
    render() {
        return (
            <div className="body-cards3">
                <div className="container-cards3">
                    <a class="relative block bg-black group" href="">
                        <img
                            class="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75  group-hover:opacity-50"
                            src="https://www.hyperui.dev/photos/man-6.jpeg"
                            alt=""
                        />
                        <div class="relative p-8">
                            <p class="text-sm font-medium tracking-widest text-pink-500 uppercase">
                            Developer
                            </p>

                            <p class="text-2xl font-bold text-white">Barry Scott</p>

                            <div class="mt-64">
                            <div
                                class="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0"
                            >
                                <p class="text-sm text-white">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                                perferendis hic asperiores quibusdam quidem voluptates doloremque
                                reiciendis nostrum harum. Repudiandae?
                                </p>
                            </div>
                            </div>
                        </div>
                    </a>
                </div>

            </div>
        );
    }
}

export default Cards3;