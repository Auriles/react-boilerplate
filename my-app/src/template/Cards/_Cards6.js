/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';

class Cards6 extends Component {
    render() {
        return (
            <div className='body-cards6'>
                <div className="container-cards6">
                    <article class="p-4 bg-gray-800 border border-gray-700 rounded-xl">
                        <div class="flex items-center">
                            <img
                            src="https://unavatar.now.sh/twitter/itsmarkmead"
                            alt="Mark Mead"
                            class="w-16 h-16 rounded-full"
                            />

                            <div class="ml-3">
                            <h5 class="text-lg font-medium text-white">Mark Mead</h5>
                            <div class="flow-root">
                                <ul class="flex flex-wrap -m-1">
                                <li class="p-1 leading-none">
                                    <a
                                    href="https://twitter.com/itsmarkmead"
                                    class="text-xs font-medium text-gray-300"
                                    >
                                    Twitter
                                    </a>
                                </li>

                                <li class="p-1 leading-none">
                                    <a
                                    href="https://github.com/markmead"
                                    class="text-xs font-medium text-gray-300"
                                    >
                                    GitHub
                                    </a>
                                </li>

                                <li class="p-1 leading-none">
                                    <a
                                    href="https://markmead.dev/"
                                    class="text-xs font-medium text-gray-300"
                                    >Website</a
                                    >
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>

                        <ul class="mt-4 space-y-2">
                            <li>
                            <a
                                href="https://github.com/andrewmcodes/hyperui"
                                class="block h-full p-4 border border-gray-700 rounded-lg hover:border-pink-600"
                            >
                                <h5 class="font-medium text-white">HyperUI</h5>

                                <p class="mt-1 text-xs font-medium text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                                consequuntur deleniti, unde ab ut in!
                                </p>
                            </a>
                            </li>

                            <li>
                            <a
                                href="https://github.com/markmead/hyperjs"
                                class="block h-full p-4 border border-gray-700 rounded-lg hover:border-pink-600"
                            >
                                <h5 class="font-medium text-white">HyperJS</h5>

                                <p class="mt-1 text-xs font-medium text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                                cumque saepe sit.
                                </p>
                            </a>
                            </li>
                        </ul>
                    </article>
                </div>
            </div>
        );
    }
}

export default Cards6;