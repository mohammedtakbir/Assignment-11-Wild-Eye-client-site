import { Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'

const Header = () => {
    return (
        <div className='bg-gray-200'>
            <div className='container mx-auto'>
                <Navbar
                    className='!py-4 !bg-gray-200'
                    fluid={true}
                    rounded={true}
                >
                    <Link className='flex' to='/'>
                        <img
                            src={logo}
                            className="mr-3 h-6 sm:h-9"
                            alt="Wild Eye Logo"
                        />
                        <span className="self-center whitespace-nowrap text-[22px] font-semibold dark:text-white">
                            Wild <span className='font-light'>Eye</span>
                        </span>
                    </Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Link className='text-base text-gray-700' to='/home'>Home</Link>
                        <Link className='text-base text-gray-700' to='/services'>Services</Link>
                        <Link className='text-base text-gray-700' to='/login'>Login</Link>
                        <Link className='text-base text-gray-700' to='/signup'>Sign Up</Link>
                        <Link className='text-base text-gray-700' to='/logout'>My Reviews</Link>
                        <Link className='text-base text-gray-700' to='/logout'>Add Service</Link>
                        <Link>
                            <button className='text-base text-gray-700' to='/logout'>Log Out</button>
                        </Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;