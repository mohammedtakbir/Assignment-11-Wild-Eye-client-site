import React, { useRef } from 'react';
import { FaMobileAlt, FaMapMarkerAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        const name = e.target.user_name.value;
        if (name === '') {
            toast.error('')
        }

        emailjs.sendForm(
            'service_p5rt4en',
            'template_ce8xyuh',
            form.current,
            '2e95VstjhAiOaaUxj'
        )
            .then((result) => {
                e.target.reset();
                toast.success('Message sent successfully!')
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <div className='lg:mx-0 mx-2 sm:py-16 py-10 bg-gray-50' id='contact'>
                <div className='max-w-[1200px] mx-auto' data-aos="zoom-in">
                    <h2 className='sm:text-3xl text-2xl text-center font-medium sm:mb-12 mb-7'>CONTACT WITH ME</h2>
                    <div>
                        <iframe
                            className='block w-full'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7305.438312489121!2d90.50374027691828!3d23.72172116079032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b6673815557f%3A0x81321617f1c22aa5!2sTarabo!5e0!3m2!1sen!2sbd!4v1670672522783!5m2!1sen!2sbd" style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">

                        </iframe>
                    </div>
                    <div className='lg:flex md:mt-16 mt-10 gap-5 md:mx-0 mx-2'>
                        <div className='lg:w-[30%]'>
                            <img
                                className='rounded-lg w-[400px] mx-auto'
                                src="https://www.expressinfo.cz/wp-content/uploads/2022/09/atlascz-prihlaseni-a-registrace-do-emailu.png"
                                alt=""
                            />
                        </div>
                        <div className='lg:w-[65%] w-[100%] lg:mt-0 mt-7'>
                            <h3 className='text-xl font-semibold'>How Can I Help You?</h3>
                            <form
                                ref={form}
                                onSubmit={sendEmail}
                                className='my-5'
                            >
                                <div className='sm:flex gap-5'>
                                    <div className='flex flex-col gap-6 sm:w-[50%]'>
                                        <input
                                            name="user_name"
                                            type="text"
                                            placeholder="Full Name"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            required
                                        />
                                        <input
                                            name="user_email"
                                            type="email"
                                            placeholder="Email Address"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            required
                                        />
                                        <input
                                            name='subject'
                                            type="text"
                                            placeholder="Subject"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            required
                                        />
                                    </div>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows="4"
                                        className="sm:w-[50%] w-full sm:mt-0 mt-4 block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                                        placeholder="Message..."
                                        required
                                    >
                                    </textarea>
                                </div>
                                <button
                                    type='submit'
                                    className='sm:px-5 px-4 sm:py-[10px] py-[8px] border-gray-700 border-2 rounded-3xl hover:bg-gray-700 hover:text-white duration-300 mt-7'>
                                    Send Message
                                </button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;