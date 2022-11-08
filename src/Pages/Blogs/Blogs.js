import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <Link rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
                        <img src="https://i.ytimg.com/vi/QwevGzVu_zk/maxresdefault.jpg" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Noster tincidunt reprimique ad pro</h3>
                            <span className="text-xs dark:text-gray-400">February 19, 2021</span>
                            <p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
                        </div>
                    </Link>
                    <div className="grid justify-center grid-cols-1 gap-6 lg:grid-cols-2">
                        <Link rel="noopener noreferrer" href="#" className="mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
                            <img alt='/' role="presentation" className="object-cover w-full rounded h-[280px] dark:bg-gray-500" src="https://i.ytimg.com/vi/QwevGzVu_zk/maxresdefault.jpg" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Difference between SQL and NoSQL.</h3>
                                <span className="text-xs dark:text-gray-400">November 05, 2022</span>
                                <div>
                                    <h3 className='font-semibold'>The Main Differences: </h3>
                                    <div className='mb-3'>
                                        <h4 className='font-semibold'>1. Type: </h4>
                                        <p className='text-sm'>SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database. </p>
                                    </div>
                                    <div className='mb-3'>
                                        <h4 className='font-semibold'>2. Language: </h4>
                                        <p className='text-sm'>SQL databases defines and manipulates data based structured query language (SQL). SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure.<br />
                                            A <strong>NoSQL</strong> database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store.</p>
                                    </div>
                                    <div className='mb-3'>
                                        <h4 className='font-semibold'>3. Structure : </h4>
                                        <p className='text-sm'>SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. This makes relational SQL databases a better option for applications that require multi-row transactions such as an accounting system or for legacy systems that were built for a relational structure. </p>
                                    </div>
                                    <div>
                                        <h4 className='font-semibold'>4. Property followed : </h4>
                                        <p className='text-sm'>SQL databases follow ACID properties (Atomicity, Consistency, Isolation and Durability) whereas the NoSQL database follows the Brewers CAP theorem (Consistency, Availability and Partition tolerance). </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link rel="noopener noreferrer" href="#" className="mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
                            <img alt='/' role="presentation" className="object-cover w-full rounded h-[280px] dark:bg-gray-500" src="http://jwt.io/img/logo-asset.svg" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">What is JWT, and how does it work?</h3>
                                <span className="text-xs dark:text-gray-400">November 09, 2022</span>
                                <div>
                                    <div className='mb-3'>
                                        <h4 className='font-semibold'>What is JSON Web Token?</h4>
                                        <p className='text-sm'>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.</p>
                                        <p className='text-sm'>The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. </p>
                                    </div>
                                    <div>
                                        <h3 className='font-semibold'>How it works?</h3>
                                        <p className='text-sm'>Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.</p>
                                        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--paCGhFRY--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/tppls6i2nbdqevr2nybr.png" alt="" />
                                        <p className='text-sm mb-2'>1. User sign-in using username and password or google/facebook.</p>
                                        <p className='text-sm mb-2'>2. Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.</p>
                                        <p className='text-sm mb-2'>3. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.</p>
                                        <p className='text-sm mb-2'>4. Resource server then verifies the authenticity of the token using the secret salt/ public key.</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link rel="noopener noreferrer" href="#" className="mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
                            <img alt='/' role="presentation" className="object-cover w-full rounded h-[280px] dark:bg-gray-500" src="https://www.atliq.com/wp-content/uploads/2022/06/Know-the-difference-between-javascript-and-node-js-1-1-1.jpg" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">What is the difference between javascript and NodeJS?</h3>
                                <span className="text-xs dark:text-gray-400">November 07, 2022</span>
                                <div>
                                    <div className='mb-3'>
                                        <h4 className='font-semibold'>NodeJS :</h4>
                                        <p className='text-sm'>NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. </p>
                                    </div>
                                    <div className='mb-4'>
                                        <h4 className='font-semibold'>JavaScript :</h4>
                                        <p className='text-sm'>Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.</p>
                                    </div>
                                    <div>
                                        <h4 className='font-semibold'>Difference between Nodejs and JavaScript :</h4>
                                        <p className='text-sm mb-2'>
                                            1. Javascript is a programming language that is used for writing scripts on the website. <br />
                                            But NodeJS is a Javascript runtime environment.
                                        </p>
                                        <p className='text-sm mb-2'>
                                            2. Javascript can only be run in the browsers. <br />
                                            But NodeJS is mostly used on the server-side.
                                        </p>
                                        <p className='text-sm mb-2'>
                                            3. Javascript is basically used on the client-side. <br />
                                            But NodeJS is mostly used on the server-side.
                                        </p>
                                        <p className='text-sm mb-2'>
                                            4. Javascript is capable enough to add HTML and play with the DOM. <br />
                                            But Nodejs does not have capability to add HTML tags.
                                        </p>
                                        <p className='text-sm'>
                                            5. Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.  <br />
                                            But V8 is the Javascript engine inside of node.js that parses and runs Javascript.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link rel="noopener noreferrer" href="#" className="mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
                            <img alt='/' role="presentation" className="object-cover w-full rounded h-[280px] dark:bg-gray-500" src="https://colorlib.com/wp-content/uploads/sites/2/nodejs-frameworks.png" />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">How does NodeJS handle multiple requests at the same time?</h3>
                                <span className="text-xs dark:text-gray-400">November 10, 2022</span>
                                <div>
                                    <div>
                                        <p className="text-sm">
                                            We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded.
                                        </p>
                                        <h3 className='font-semibold mt-3'>How NodeJS handle multiple client requests?</h3>
                                        <p className='text-sm'>
                                            NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.
                                        </p>
                                        <p className='text-sm mt-3'>
                                            If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                    </div>
                    <div className="flex justify-center">
                        <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400">Load more posts...</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blogs;