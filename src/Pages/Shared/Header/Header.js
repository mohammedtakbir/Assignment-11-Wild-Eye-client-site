import { Navbar } from 'flowbite-react';
import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import logo from '../../../assets/logo.png'
import { AuthContext } from '../../../Contexts/AuthProvider';

const Header = () => {
    const { user, userSignOut } = useContext(AuthContext);

    //* user Sign Out
    const handleSignOut = () => {
        userSignOut()
            .then(() => {
                toast.success('Sign out successfully')
            })
            .catch(err => console.log(err))
    };
    return (
        <section className='bg-gray-200'>
            <nav className='max-w-[1300px] mx-auto'>
                <Navbar
                    className='!py-4 !bg-gray-200'
                    fluid={true}
                    rounded={true}
                >
                    <NavLink className='flex' to='/'>
                        <img
                            src={logo}
                            className="mr-3 h-6 sm:h-9"
                            alt="Wild Eye Logo"
                        />
                        <span className="self-center whitespace-nowrap text-[22px] font-semibold dark:text-white">
                            Wild <span className='font-light'>Eye</span>
                        </span>
                    </NavLink>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <NavLink className='text-base text-gray-700 md:mb-0 mb-2' to='/home'>Home</NavLink>
                        <NavLink className='text-base text-gray-700 md:mb-0 mb-2' to='/services'>Services</NavLink>
                        <NavLink className='text-base text-gray-700 md:mb-0 mb-2' to='/blogs'>Blogs</NavLink>
                        <Link
                            className='text-base text-gray-700 md:mb-0 mb-2 cursor-pointer'
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={20}
                            duration={1000}
                        >
                            Contact
                        </Link>
                        {user ?
                            <>
                                <NavLink className='text-base text-gray-700 md:mb-0 mb-2' to='/myReviews'>My Reviews</NavLink>
                                <NavLink className='text-base text-gray-700 md:mb-0 mb-2' to='/addService'>Add Service</NavLink>
                                <NavLink>
                                    <button onClick={handleSignOut} className='text-base text-gray-700' to='/logout'>Log Out</button>
                                </NavLink>
                            </> :
                            <>
                                <NavLink className='text-base text-gray-700 md:mb-0 mb-2' to='/login'>Login</NavLink>
                                <NavLink className='text-base text-gray-700 md:mb-0 mb-2' to='/signup'>Sign Up</NavLink>
                            </>
                        }
                    </Navbar.Collapse>
                </Navbar>
            </nav>
        </section>
    );
};

export default Header;