/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';

class SideMenus5 extends Component {
    render() {
        return (
            <>
                <div class="flow-root">
                    <nav class="flex flex-col space-y-2">
                        <div>
                        <strong class="block text-xs font-medium text-gray-400 uppercase">
                            General
                        </strong>

                        <ul class="mt-2">
                            <li>
                            <a
                                href=""
                                class="block px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg"
                            >
                                Profile
                            </a>
                            </li>

                            <li>
                            <a
                                href=""
                                class="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                            >
                                Team
                            </a>
                            </li>

                            <li>
                            <a
                                href=""
                                class="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                            >
                                Projects
                            </a>
                            </li>

                            <li>
                            <a
                                href=""
                                class="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                            >
                                Meetings
                            </a>
                            </li>

                            <li>
                            <a
                                href=""
                                class="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                            >
                                Calendar
                            </a>
                            </li>
                        </ul>
                        </div>

                        <div>
                        <strong class="block text-xs font-medium text-gray-400 uppercase">
                            Support
                        </strong>

                        <ul class="mt-1">
                            <li>
                            <a
                                href=""
                                class="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                            >
                                Update
                            </a>
                            </li>

                            <li>
                            <a
                                href=""
                                class="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                            >
                                Help
                            </a>
                            </li>

                            <li>
                            <a
                                href=""
                                class="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                            >
                                Settings
                            </a>
                            </li>
                        </ul>
                        </div>

                        <div>
                        <strong class="block text-xs font-medium text-gray-400 uppercase">
                            Profile
                        </strong>

                        <ul class="mt-1">
                            <li>
                            <a
                                href=""
                                class="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                            >
                                Details
                            </a>
                            </li>

                            <li>
                            <a
                                href=""
                                class="block px-4 py-2 text-sm font-medium text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                            >
                                Subscription
                            </a>
                            </li>

                            <li>
                            <form action="/logout">
                                <button
                                type="submit"
                                class="block w-full px-4 py-2 text-sm font-medium text-left text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                                >
                                Logout
                                </button>
                            </form>
                            </li>
                        </ul>
                        </div>
                    </nav>
                </div>
            </>
        );
    }
}

export default SideMenus5;