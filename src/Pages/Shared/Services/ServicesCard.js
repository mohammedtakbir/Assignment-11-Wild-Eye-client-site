import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServicesCard = ({ service }) => {
    const { image, name, _id, description, price, others_info } = service;
    return (
        <>
            <div className="sm:mx-0 mx-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <PhotoProvider>
                    <PhotoView src={image}>
                        <img className="rounded-t-lg h-[300px] w-full" src={image} alt="" />
                    </PhotoView>
                </PhotoProvider>
                <div className="p-5">
                    <Link to="#">
                        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    </Link>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description[0].description1.slice(0, 100) + '...'}</p>
                    <div className='flex justify-between items-center mb-4 mt-7'>
                        <h3 className='text-2xl font-semibold'>${price}</h3>
                        <h4>
                            <span className='text-[#ffd700] mr-2'>
                                <FaStar className='inline ml-1' />
                                <FaStar className='inline ml-1' />
                                <FaStar className='inline ml-1' />
                                <FaStar className='inline ml-1' />
                                <FaStarHalfAlt className='inline' />
                            </span>
                            <span className='font-semibold'>{others_info.rating.number}</span>
                        </h4>
                    </div>
                    <Link to={`/service-details/${_id}`} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300">
                        Details
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ServicesCard;