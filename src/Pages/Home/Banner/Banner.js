import { Button } from 'flowbite-react';
import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <section className=''>
            <div className='relative'>
                <div className='bg-img'>
                    <img className='md:h-[95vh] h-[800px] md:object-none object-cover w-full' src="https://i.ibb.co/SN8Vt8g/Screenshot-83.png" alt="" />
                </div>
                <div className='absolute text-sm text-white md:top-[15%] top-[10%] sm:left-[17%] left-[3%]'>
                    <h1 className='md:text-5xl text-4xl font-sm mb-10'>Join my Wild Eye <br /> Photography Course!</h1>
                    <h3 className='mb-7'>In these course i will cover: </h3>
                    <ul className='mb-6'>
                        <li className='mb-2'>Equipment for wildlife photography plus recommendations for your budget</li>
                        <li className='mb-2'>Getting out of auto & mastering your camera settings</li>
                        <li className='mb-2'>How to take razor-sharp photos</li>
                        <li className='mb-2'>The secret to taking photos like a pro</li>
                        <li className='mb-2'>Post-processing for impactful but natural-looking results</li>
                        <li className='mb-2'>Post-processing for impactful but natural-looking results</li>
                        <li className='mb-2'>And much more!</li>
                    </ul>
                    <p className='w-[60%]'>Plus get instant access to our ebook “Ten Things you can do Right Now to Improve your Wildlife Photography!”</p>
                    <div className='mt-7'>
                        <Button color="light" outline={true}>
                            Get Started Now
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;