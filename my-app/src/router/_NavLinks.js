/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

// Logo
import logo from '../images/logo.png';

class NavLinks extends Component {
    render() {
        return (
            <div class="flex flex-col justify-between h-screen bg-white border-r">
                <div class="px-4 py-6">
                    {/* <span class="block w-32 h-10 bg-gray-200 rounded-lg"> Logo </span> */}
                    <section className="">
                        <div className="block w-32 h-16 rounded-lg">
                            <img src={logo} alt="Logo Oauri" />
                        </div>
                    </section>

                    <nav class="flex flex-col mt-6 space-y-1">

                        {/* Lien vers Home Page */}
                        <NavLink to="/">
                            <a href="" class="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 opacity-75"fill="none"viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                                <span class="ml-3 text-sm font-medium"> Home </span>
                            </a>
                        </NavLink>

                        {/* Catégorie 1 */}
                        <details class="group">
                            <summary class="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                                </svg>

                                <span class="ml-3 text-sm font-medium"> Layouts </span>

                                <span class="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
                                    </svg>
                                </span>
                            </summary>

                            <nav class="mt-1.5 ml-8 flex flex-col">

                            {/* Route 1 */}
                            <NavLink to="/headers-exemple">
                                <a href="" class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
                                    </svg>
                                    <span class="ml-3 text-sm font-medium"> Headers </span>
                                </a>
                            </NavLink>

                            {/* Route 2 */}
                            <NavLink to="/banners-exemple">
                                <a href="" class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
                                    </svg>
                                    <span class="ml-3 text-sm font-medium"> Banners </span>
                                </a>
                            </NavLink>

                            {/* Route 3 */}

                            <NavLink to="/footers-exemple">
                                <a href="" class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
                                    </svg>
                                    <span class="ml-3 text-sm font-medium"> Footers </span>
                                </a>
                            </NavLink>

                            </nav>
                        </details>

                        {/* Catégorie 2 */}
                        <details class="group">
                            <summary class="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                                </svg>

                                <span class="ml-3 text-sm font-medium"> Menus </span>

                                <span class="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
                                    </svg>
                                </span>
                            </summary>

                            <nav class="mt-1.5 ml-8 flex flex-col">

                            {/* Route 1 */}
                            <NavLink to="/side-menus-exemple">
                                <a href="" class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
                                    </svg>
                                    <span class="ml-3 text-sm font-medium"> Side Menus </span>
                                </a>
                            </NavLink>

                            {/* Route 2 */}
                            <NavLink to="/navbars-exemple">
                                <a href="" class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
                                    </svg>
                                    <span class="ml-3 text-sm font-medium"> Navbars </span>
                                </a>
                            </NavLink>

                            </nav>
                        </details>

                        {/* Catégorie 3 */}
                        <details class="group">
                            <summary class="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                                </svg>

                                <span class="ml-3 text-sm font-medium"> Components </span>

                                <span class="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
                                    </svg>
                                </span>
                            </summary>

                            <nav class="mt-1.5 ml-8 flex flex-col">

                            {/* Route 1 */}
                            <NavLink to="/products-exemple">
                                <a href="" class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
                                    </svg>
                                    <span class="ml-3 text-sm font-medium"> Products </span>
                                </a>
                            </NavLink>

                            {/* Route 2 */}
                            <NavLink to="/product-collections-exemple">
                                <a href="" class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
                                    </svg>
                                    <span class="ml-3 text-sm font-medium"> Product Collections </span>
                                </a>
                            </NavLink>

                            {/* Route 3 */}
                            <NavLink to="/product-cards-exemple">
                                <a href="" class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
                                    </svg>
                                    <span class="ml-3 text-sm font-medium"> Product Cards </span>
                                </a>
                            </NavLink>

                            {/* Route 4 */}
                            <NavLink to="/checkouts-exemple">
                                <a href="" class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
                                    </svg>
                                    <span class="ml-3 text-sm font-medium"> Checkouts </span>
                                </a>
                            </NavLink>

                            {/* Route 5 */}
                            <NavLink to="/carts-exemple">
                                <a href="" class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
                                    </svg>
                                    <span class="ml-3 text-sm font-medium"> Carts </span>
                                </a>
                            </NavLink>

                            {/* Route 6 */}
                            <NavLink to="/tables-exemple">
                                <a href="" class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
                                    </svg>
                                    <span class="ml-3 text-sm font-medium"> Tables </span>
                                </a>
                            </NavLink>

                            {/* Route 7 */}
                            <NavLink to="/steps-exemple">
                                <a href="" class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
                                    </svg>
                                    <span class="ml-3 text-sm font-medium"> Steps </span>
                                </a>
                            </NavLink>

                            {/* Route 8 */}
                            <NavLink to="/radios-group-exemple">
                                <a href="" class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
                                    </svg>
                                    <span class="ml-3 text-sm font-medium"> Radios Group </span>
                                </a>
                            </NavLink>

                            {/* Route 9 */}
                            <NavLink to="/stats-exemple">
                                <a href="" class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
                                    </svg>
                                    <span class="ml-3 text-sm font-medium"> Stats </span>
                                </a>
                            </NavLink>

                            {/* Route 10 */}
                            <NavLink to="/testimonials-exemple">
                                <a href="" class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
                                    </svg>
                                    <span class="ml-3 text-sm font-medium"> Testimonials </span>
                                </a>
                            </NavLink>

                            {/* Route 11 */}
                            <NavLink to="/popups-exemple">
                                <a href="" class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
                                    </svg>
                                    <span class="ml-3 text-sm font-medium"> Popups </span>
                                </a>
                            </NavLink>

                            {/* Route 12 */}
                            <NavLink to="/paginations-exemple">
                                <a href="" class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-blue-100 hover:text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
                                    </svg>
                                    <span class="ml-3 text-sm font-medium"> Paginations </span>
                                </a>
                            </NavLink>

                            {/* Route 13 */}
                            <NavLink to="/inputs-exemple">
                                <a href="" class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-blue-100 hover:text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
                                    </svg>
                                    <span class="ml-3 text-sm font-medium"> Inputs </span>
                                </a>
                            </NavLink>

                            {/* Route 14 */}
                            <NavLink to="/forms-exemple">
                                <a href="" class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-blue-100 hover:text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
                                    </svg>
                                    <span class="ml-3 text-sm font-medium"> Forms </span>
                                </a>
                            </NavLink>

                            {/* Route 15 */}
                            <NavLink to="/filters-exemple">
                                <a href="" class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-blue-100 hover:text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
                                    </svg>
                                    <span class="ml-3 text-sm font-medium"> Filters </span>
                                </a>
                            </NavLink>

                            {/* Route 16 */}
                            <NavLink to="/faqs-exemple">
                                <a href="" class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-blue-100 hover:text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
                                    </svg>
                                    <span class="ml-3 text-sm font-medium"> FAQ </span>
                                </a>
                            </NavLink>

                            {/* Route 17 */}
                            <NavLink to="/cards-exemple">
                                <a href="" class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-blue-100 hover:text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
                                    </svg>
                                    <span class="ml-3 text-sm font-medium"> Cards </span>
                                </a>
                            </NavLink>

                            {/* Route 18 */}
                            <NavLink to="/breadcrumbs-exemple">
                                <a href="" class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-blue-100 hover:text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
                                    </svg>
                                    <span class="ml-3 text-sm font-medium"> Breadcrumbs </span>
                                </a>
                            </NavLink>

                            {/* Route 19 */}
                            <NavLink to="/buttons-exemple">
                                <a href="" class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-blue-100 hover:text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
                                    </svg>
                                    <span class="ml-3 text-sm font-medium"> Buttons </span>
                                </a>
                            </NavLink>

                            {/* Route 20 */}
                            <NavLink to="/buttons-group-exemple">
                                <a href="" class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-blue-100 hover:text-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
                                    </svg>
                                    <span class="ml-3 text-sm font-medium"> Buttons Group </span>
                                </a>
                            </NavLink>

                            </nav>
                        </details>



                    </nav>
                </div>

                    <div class="sticky inset-x-0 bottom-0 border-t border-gray-100">
                        <a href="" class="flex items-center p-4 bg-white hover:bg-gray-50 shrink-0">
                        <img
                            class="object-cover w-10 h-10 rounded-full"
                            src="https://www.hyperui.dev/photos/man-4.jpeg"
                            alt="Simon Lewis"
                        />

                        <div class="ml-1.5">
                            <p class="text-xs">
                            <strong class="block font-medium">Auriles EL HADDAD</strong>

                            <span> auriles.elhaddad.pro@gmail.com</span>
                            </p>
                        </div>
                        </a>
                    </div>
                </div>
        );
    }
}

export default NavLinks;