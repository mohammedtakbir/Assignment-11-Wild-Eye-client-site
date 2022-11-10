import React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const EditReview = () => {
    const id = useParams();
    const [review, setReview] = useState('');
    const navigate = useNavigate();

    const handleEditReview = (id) => {

        if(review === ''){
            toast.error('You have to add review.')
            return;
        }

        fetch(`https://wild-eye.vercel.app/reviews/${id.id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ review: review })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    navigate('/myReviews')
                    toast.success('Review Updated!')
                }
            })
    }
    return (
        <div className='sm:w-[500px] w-full sm:mx-auto mx-2 md:my-24 my-14 shadow-lg p-5 border rounded-md'>
            <div className='mb-4'>
                <label for="message" class="block mb-4 text-xl font-medium text-gray-900 dark:text-gray-400">Edit Review</label>
                <textarea onBlur={(e) => setReview(e.target.value)}
                    name='review'
                    id="message"
                    rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Edit your Review here...">
                </textarea>
            </div>
            <button onClick={() => handleEditReview(id)} type="submit" className='text-white py-1 px-3 bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300'>Update</button>
        </div>
    );
};

export default EditReview;