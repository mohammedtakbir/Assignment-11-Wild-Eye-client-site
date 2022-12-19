import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Loading from '../../../components/Loading';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { useSetTitle } from '../../../hooks/useSetTitle';
import ReviewDetails from '../../Reviews/ReviewDetails';
import ServiceDescription from './ServiceDescription';

const ServiceDetails = () => {
    useSetTitle('Service-Details');
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const { _id, description, image, others_info } = service;
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`https://wild-eye.vercel.app/reviews/${_id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setLoading(false);
            })
            .catch(err => {
                setLoading(false)
            })
    }, [_id])

    return (
        <div className='max-w-4xl lg:mx-auto mx-2 my-10'>
            {/* Description */}
            <div>
                <img className='w-full lg:h-[600px] md:h-[500px] sm:h-[400px] h-[280px] rounded-md' src={image} alt="" />
                <h2 className='text-xl font-semibold mt-4 mb-5'>{service.name}</h2>
                <div>
                    <h3 className='font-semibold text-2xl mb-2'>Description</h3>
                    {
                        description.map(desCrip => <ServiceDescription
                            key={desCrip.index}
                            desCrip={desCrip}
                        />)
                    }
                </div>
            </div>

            {/* Reviews */}
            <div className='mt-14'>
                <div>
                    <h3>
                        <span className='text-[#ffd700] text-3xl'><FaStar className='inline' /> </span>
                        <span className='text-2xl font-medium mr-2'>
                            {!reviews.length ? '0'
                                : others_info?.rating.number
                            } course rating</span>
                        <span className='text-2xl font-medium sm:inline block sm:ml-0 ml-8 sm:mt-0 mt-1'>
                            •
                            {!reviews.length ? '0' :
                                others_info?.rating?.ratings
                            } ratings</span>
                    </h3>
                    {loading ? '' :
                        <h3 className={!reviews.length ? 'my-10 text-3xl text-center font-medium text-gray-500' : 'hidden'}>{!reviews.length ? 'No reviews were added' : ''}</h3>}
                </div>
                {
                    loading ?
                        <Loading />
                        :
                        <div className='grid md:grid-cols-2'>
                            {
                                reviews.map(rvw => <ReviewDetails
                                    key={rvw._id}
                                    rvw={rvw}
                                />)
                            }
                        </div>
                }
                <div className='mt-5 text-center'>
                    <Link to={`/reviews/${_id}`} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300">
                        {user ?
                            'Add Your Review' :
                            'Please login to add your review'
                        }
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;