import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
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
                <div className='text-center mt-10'>
                    <Link to='/services'>
                        <button className='className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300"'>See All Courses</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Home;