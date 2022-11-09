import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider';
import UserReviewsInTable from './UserReviewsInTable';

const MyReviews = () => {
    const { user, userSignOut } = useContext(AuthContext);
    const [userReviews, setUserReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('wildEye-token')}`
            }
        })
            .then(res => {
                if(res.status === 401 || res.status === 403){
                    return userSignOut();
                }
                return res.json()}
                )
            .then(data => {
                setUserReviews(data)
            })
    }, [user?.email, userSignOut]);

    const handleDeleteReview = (_id) => {
        const proceed = window.confirm('Are you sure you want to delete this review?');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = userReviews.filter(userReview => userReview._id !== _id);
                        setUserReviews(remaining);
                        toast.success('successfully deleted.')
                    }
                })
        }
    }

    return (
        <div className='container mx-auto my-10'>
            
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Service Name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Review
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Delete Review
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Edit Review
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    <h3 className={!userReviews.length ? 'my-10 text-center text-2xl font-medium' : 'hidden'}>{!userReviews.length ? 'No reviews were added' : ''}</h3>
                        {
                            userReviews.map(userReview => <UserReviewsInTable
                                key={userReview._id}
                                userReview={userReview}
                                handleDeleteReview={handleDeleteReview}
                            />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviews;