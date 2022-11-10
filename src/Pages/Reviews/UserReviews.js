import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider';
import { useSetTitle } from '../../hooks/useSetTitle';
import UserReviewsInTable from './UserReviewsInTable';

const MyReviews = () => {
    useSetTitle('My Reviews');
    const { user, userSignOut } = useContext(AuthContext);
    const [userReviews, setUserReviews] = useState([]);

    useEffect(() => {
        fetch(`https://wild-eye.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('wildEye-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return userSignOut();
                }
                return res.json()
            })
            .then(data => {
                setUserReviews(data)
            })
    }, [user?.email, userSignOut]);

    const handleDeleteReview = (_id) => {
        const proceed = window.confirm('Are you sure you want to delete this review?');
        if (proceed) {
            fetch(`https://wild-eye.vercel.app/reviews/${_id}`, {
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
            <h3 className={!userReviews.length ? 'my-10 text-center text-2xl font-medium' : 'hidden'}>{!userReviews.length ? 'No reviews were added' : ''}</h3>
            <h2 className='text-center mb-6 text-3xl font-medium'>All My Reviews</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                {
                    userReviews.map(userReview => <UserReviewsInTable
                        key={userReview._id}
                        userReview={userReview}
                        handleDeleteReview={handleDeleteReview}
                    />)
                }
            </div>
        </div>
    );
};

export default MyReviews;