import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../../components/Loading';
import { useSetTitle } from '../../../hooks/useSetTitle';
import ServicesCard from '../../Shared/Services/ServicesCard';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import About from '../Sections/About';
import Section1 from '../Sections/Section1';

const Home = () => {
    useSetTitle('Home');
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://wild-eye.vercel.app/services/home')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
            })
    }, []);

    return (
        <>
            <Banner />
            <Section1 />
            {loading ?
                <Loading />
                :
                <div className='bg-gray-50'>
                    <div className='max-w-[1300px] mx-auto sm:pb-14 pb-10 sm:pt-16 pt-10'>
                        <div className='text-center sm:mb-10 mb-7'>
                            <h2 className='sm:text-3xl text-2xl mb-4'>Take your Wildlife Photography to the Next Level!</h2>
                            <p>Discover the world of remote and camera trap wildlife photography…</p>
                        </div>
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
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
                </div>}
            <About />
            <Contact />
        </>
    );
};

export default Home;