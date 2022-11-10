import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='bg-gray-100'>
            <section className="flex items-center h-screen p-16 dark:bg-gray-900 dark:text-gray-100">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl pb-10">Sorry, we couldn't find this page.</p>
                        <Link rel="noopener noreferrer" to='/' className="px-8 py-3 font-semibold bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white">Back to homepage</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;