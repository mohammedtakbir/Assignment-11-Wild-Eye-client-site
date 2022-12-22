import React from 'react';

const Section1 = () => {
    return (
        <div className='bg-gray-100'>
            <div className="px-4 sm:py-16 pb-12 pt-7 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-10 lg:grid-cols-2">
                    <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
                            <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
                                <polyline
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    points=" 8,5 8,1 16,1 16,5"
                                    strokeLinejoin="round"
                                />
                                <polyline
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    points="9,15 1,15 1,5 23,5 23,15 15,15"
                                    strokeLinejoin="round"
                                />
                                <polyline
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    points="22,18 22,23 2,23 2,18"
                                    strokeLinejoin="round"
                                />
                                <rect
                                    x="9"
                                    y="13"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    width="6"
                                    height="4"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6 font-sans sm:text-3xl text-2xl font-sm tracking-tight text-gray-900 sm:leading-none">
                                Learn Wildlife Photography!
                                <br className="hidden md:block" />
                                your next{' '}
                                <span className="inline-block text-deep-purple-accent-400">
                                    destination.
                                </span>
                            </h2>
                            <p className="text-gray-700 text-sm">
                                I produced a range of training resources for nature photographers of all levels. If you are looking to advance your photography then let me guide you through selecting equipment to suit your budget, mastering your camera settings, wildlife photography techniques, post-processing and more. If you’re an advanced photographer, learn how to use the latest cutting-edge technologies or check out our business and marketing training platform.
                            </p>
                        </div>
                        <div>
                            <a
                                href="/"
                                aria-label=""
                                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            >
                                Start Here
                                <svg
                                    className="inline-block w-3 ml-2"
                                    fill="currentColor"
                                    viewBox="0 0 12 12"
                                >
                                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center -mx-4 lg:pl-8">
                        <div className="flex flex-col items-end px-3">
                            <img
                                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                                src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d2lsZGxpZmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt=""
                            />
                            <img
                                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                                src="https://images.unsplash.com/photo-1542722140-13cfa09585c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHdpbGRsaWZlJTIwcGhvdG9ncmFwaHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt=""
                            />
                        </div>
                        <div className="px-3">
                            <img
                                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                                src="https://images.unsplash.com/photo-1620673399859-d7e13565737d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2lsZGxpZmUlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section1;