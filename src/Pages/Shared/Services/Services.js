import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useSetTitle } from '../../../hooks/useSetTitle';
import ServicesCard from './ServicesCard';

const Services = () => {
    const services = useLoaderData();
    useSetTitle('Services');
    return (
        <>
            <div className='container mx-auto py-10 sm:my-10'>
                <div className='text-center sm:mb-10 mb-7'>
                    <h2 className='text-3xl mb-4'>Take your Wildlife Photography to the Next Level!</h2>
                    <p>Discover the world of remote and camera trap wildlife photography…</p>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
                    {
                        services.map(service => <ServicesCard
                            key={service._id}
                            service={service}
                        />)
                    }
                </div>
            </div>
        </>
    );
};

export default Services;