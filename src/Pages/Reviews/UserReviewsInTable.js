import React from 'react';
import { Link } from 'react-router-dom';

const UserReviewsInTable = ({ userReview, handleDeleteReview }) => {
    const { courseName, review, _id } = userReview;
    console.log(userReview)
    return (
        <>
            <div className="p-6 sm:mx-0 mx-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 relative">
                <Link href="#">
                    <h5 className="mb-2 text-2xl font-sm tracking-tight text-gray-900 dark:text-white">{courseName}</h5>
                </Link>
                <p className="text-sm text-gray-700 dark:text-gray-400 mb-7">{review}</p>
                <div className='absolute bottom-4'>
                    <Link to={`/editReview/${_id}`}>
                        <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-5">Edit Review</button>
                    </Link>
                    <button onClick={() => handleDeleteReview(_id)} className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
                </div>
            </div>
        </>
    );
};

export default UserReviewsInTable;