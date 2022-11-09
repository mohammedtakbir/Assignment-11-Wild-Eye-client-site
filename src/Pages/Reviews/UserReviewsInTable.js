import React from 'react';

const UserReviewsInTable = ({ userReview, handleDeleteReview }) => {
    const { courseName, review, _id } = userReview;
    
    return (
        <>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {courseName}
                </th>
                <td className="py-4 px-6">
                    {review}
                </td>
                <td className="py-4 px-6">
                    <button onClick={() => handleDeleteReview(_id)} className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
                </td>
                <td className="py-4 px-6">
                    <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                </td>
            </tr>
        </>
    );
};

export default UserReviewsInTable;