/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';

class Paginations3 extends Component {
    render() {
        return (
            <div className='body-paginations3'>
                <div className="container-paginations3">
                    <div class="inline-flex justify-center space-x-1">
                        <a href="/?page=1" class="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </a>

                        <input type="number" class="w-12 p-0 text-xs font-medium text-center border border-gray-100 rounded no-spinners" min="1" value="2" />

                        <a href="/?page=3" class="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Paginations3;