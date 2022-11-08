import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Reviews from '../../Reviews/Reviews';
import ServiceDescription from './ServiceDescription';

const ServiceDetails = () => {
    const service = useLoaderData();
    const { name, _id, description, image, others_info, price } = service;

    return (
        <div className='max-w-3xl mx-auto my-10'>
            <div>
                <img className='max-w-3xl rounded-md' src={image} alt="" />
                <h2 className='text-xl font-semibold mt-4 mb-5'>{service.name}</h2>
                <div>
                    <h3 className='font-semibold text-2xl mb-2'>Description</h3>
                    {
                        description.map(desCrip => <ServiceDescription desCrip={desCrip} />)
                    }
                </div>
            </div>
            <div>
                <Reviews service={service} />
            </div>
        </div>
    );
};

export default ServiceDetails;