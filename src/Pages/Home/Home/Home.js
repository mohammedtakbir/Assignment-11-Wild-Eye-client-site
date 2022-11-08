import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServicesCard from '../../Shared/Services/ServicesCard';
import Banner from '../Banner/Banner';

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services/home')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    console.log(services)

    return (
        <>
            <Banner />
            <div className='container mx-auto py-14'>
                <div className='text-center mb-10'>
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

export default Home;