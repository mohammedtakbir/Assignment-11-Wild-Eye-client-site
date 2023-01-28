import { Navbar } from 'flowbite-react';
import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
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
                        <Link className='text-base text-gray-700 md:mb-0 mb-2' to='/home'>Home</Link>
                        <Link className='text-base text-gray-700 md:mb-0 mb-2' to='/services'>Services</Link>
                        <Link className='text-base text-gray-700 md:mb-0 mb-2' to='/blogs'>Blogs</Link>
                        <Link className='text-base text-gray-700 md:mb-0 mb-2' to=''>Contact</Link>
                        {user ?
                            <>
                                <Link className='text-base text-gray-700 md:mb-0 mb-2' to='/myReviews'>My Reviews</Link>
                                <Link className='text-base text-gray-700 md:mb-0 mb-2' to='/addService'>Add Service</Link>
                                <Link>
                                    <button onClick={handleSignOut} className='text-base text-gray-700' to='/logout'>Log Out</button>
                                </Link>
                            </> :
                            <>
                                <Link className='text-base text-gray-700 md:mb-0 mb-2' to='/login'>Login</Link>
                                <Link className='text-base text-gray-700 md:mb-0 mb-2' to='/signup'>Sign Up</Link>
                            </>
                        }
                    </Navbar.Collapse>
                </Navbar>
            </nav>
        </section>
    );
};

export default Header;