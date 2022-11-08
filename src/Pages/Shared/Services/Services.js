import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServicesCard from './ServicesCard';

const Services = () => {
    const services = useLoaderData();

    return (
        <div className='container mx-auto py-10'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    />)
                }
            </div>
        </div>
    );
};

export default Services;