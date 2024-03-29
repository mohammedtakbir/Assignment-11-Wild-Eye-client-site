import React, { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { setAuthToken } from '../../APIs/Authenticate';
import { AuthContext } from '../../Contexts/AuthProvider';
import { useSetTitle } from '../../hooks/useSetTitle';

const SignUp = () => {
    useSetTitle('Sign Up');
    const { userSignup, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleUserSignup = (e) => {
        e.preventDefault();
        const form = e.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 8) {
            setError('Password should be at least 8 character.');
            return;
        };

        userSignup(email, password)
            .then(res => {
                setAuthToken(res);
                toast.success('Sign up successfully!');
                form.reset();
                setError('');
                console.log(res.user);
            })
            .catch(err => {
                setError(err.message)
                console.error(err)
            })
    };
    //* google sign up
    const googleSignUp = () => {
        googleSignIn()
            .then(res => {
                setAuthToken(res);
                toast.success('Sign up successfully!');
                console.log(res.user);
            })
            .catch(err => console.log(err))
    };

    return (
        <div className='flex justify-center md:my-[150px] my-[70px]'>
            <div className="p-4 w-full sm:mx-0 mx-2 sm:max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6" onSubmit={handleUserSignup}>
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">Sign Up</h5>
                    <div>
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="mohammedtakbir"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="name@company.com"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required
                        />
                    </div>
                    <p className='text-red-500 !mt-3'>
                        <small>{error}</small>
                    </p>
                    <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    value=""
                                    className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                    required
                                />
                            </div>
                            <label
                                htmlFor="remember"
                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Accept Terms & Conditions.</label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign up</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
                        Already have an account? <Link to='/login' className="text-blue-700 hover:underline dark:text-blue-500">Log in</Link>
                    </div>
                </form>
                <div className='text-center'>
                    <p className='font-bold mb-2'>
                        <small>or</small>
                    </p>
                    <button onClick={googleSignUp} type="button" className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                        <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                        Sign up with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;