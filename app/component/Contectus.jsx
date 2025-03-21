"use client";
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaHeart, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from 'react-icons/io';
import { motion } from 'framer-motion';

const ContactUs = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showNotification, setShowNotification] = useState({
        show: false,
        message: '',
        isError: false
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const result = await emailjs.sendForm(
                'service_huzrskf', // Replace with your Service ID
                'template_t80x1pu', // Replace with your Template ID
                form.current,
                'Uk-lL1QefW6voWCMi' // Replace with your Public Key
            );

            if (result.text === 'OK') {
                setShowNotification({
                    show: true,
                    message: 'Message sent successfully!',
                    isError: false
                });
                form.current.reset();
            }
        } catch (error) {
            setShowNotification({
                show: true,
                message: 'Failed to send message. Please try again.',
                isError: true
            });
        } finally {
            setIsSubmitting(false);
            // Hide notification after 3 seconds
            setTimeout(() => {
                setShowNotification({ show: false, message: '', isError: false });
            }, 3000);
        }
        window.location.href = "/SuccessPage.jsx";
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-stone-900 to-slate-800 bg-opacity-10 backdrop-blur-md rounded-lg text-white">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto text-center pt-16 mb-16 px-4">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-orange-600">
                    Let's Connect
                </h1>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Have a project in mind? Let's create something amazing together.
                    Drop me a message, and I'll get back to you as soon as possible.
                </p>
            </div>

            {/* Notification */}
            {showNotification.show && (
                <div className={`fixed top-4 right-4 p-4 rounded-lg ${showNotification.isError ? 'bg-red-500' : 'bg-green-500'
                    } text-white shadow-lg transition-all duration-500 z-50`}>
                    {showNotification.message}
                </div>
            )}

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:px-8 px-1 mb-20">
                {/* Contact Form */}
                <div className="bg-gradient-to-br from-stone-950 to-slate-900 backdrop-blur-xl rounded-2xl lg:p-8 p-4 shadow-xl py-3">
                    <form ref={form} onSubmit={handleSubmit} className="space-y-6 py-3">
                        <div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="user_Name"
                                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                    placeholder="Abhishek yadav"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="user_email"
                                className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                placeholder="Abhishek@example.com"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                name="subject"
                                className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                placeholder="Project Discussion"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Message
                            </label>
                            <textarea
                                name="message"
                                rows="4"
                                className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                                placeholder="Tell me about your project..."
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 bg-orange-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-50"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>

                {/* Character Images Section */}
                <div className="">
                    <motion.img
                    animate={{
                        y: [0, -10, 0], // Moves up and down
                      }}
                      transition={{
                        duration: 2, // Duration of one cycle
                        repeat: Infinity, // Infinite loop
                        ease: "easeInOut", // Smooth animation
                      }}
                     src="./contect2.png" alt="" />
                </div>
            </div>
            {/* Footer Section */}
            <footer className=" bg-gradient-to-br from-stone-950 to-slate-900 backdrop-blur-xl py-12 mt-auto rounded-lg">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Email Section */}
                        <div
                        

                         className="text-center md:block hidden  bg-gradient-to-br from-stone-900 to-slate-800 rounded-lg p-3 hover:bg-purple-400/20 cursor-pointer border border-black">
                            <motion.div
                            
                            className="bg-white p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                                <svg
                                    className="w-6 h-6 text-purple-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </motion.div>
                            <h3 className="text-lg font-medium text-gray-200 mb-2">Email</h3>
                            <p className="text-purple-400">ay2076088@gmail.com</p>
                        </div>

                        {/* Location Section */}
                        <div className="border  border-black text-center p-3 bg-gradient-to-br  from-stone-900 to-slate-800 rounded-lg hover:bg-pink-400/20 cursor-pointer">
                            <motion.div
                            
                             className="bg-white p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                                <svg
                                    className="w-6 h-6 text-pink-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            </motion.div>
                            <h3 className="text-lg font-medium text-gray-200 mb-2">Location</h3>
                            <p className="text-pink-400">India, UP-52</p>
                        </div>

                        <div className=" border  border-black text-center bg-gradient-to-br from-stone-900 to-slate-800 rounded-lg p-3 hover:bg-purple-400/20 cursor-pointer">
                            <motion.div
                            

                             className="bg-white p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                                <svg
                                    className="w-6 h-6 text-purple-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </motion.div>
                            <h3 className="text-lg font-medium text-gray-200 mb-2">Working Hours</h3>
                            <p className="text-purple-400">24/7</p>
                            <p className="text-purple-400">Weekend: Closed</p>
                        </div>

                        {/* Social Media Section */}
                        <div className=" border border-black text-center bg-gradient-to-br  from-stone-900 to-slate-800 rounded-lg p-3 pt-4">
                            <h3 className="text-lg font-medium text-gray-200 mb-4 md:mt-4 font-serif">Follow Us</h3>
                            <div className="flex justify-center space-x-4 mb-4">
                                <motion.a
                                 animate={{
                                    y: [0, -10, 0], // Moves up and down
                                  }}
                                  transition={{
                                    duration: 2, // Duration of one cycle
                                    repeat: Infinity, // Infinite loop
                                    ease: "easeInOut", // Smooth animation
                                  }}
                                    href="https://www.instagram.com/quantumabhishek?igsh=MXRpOHVndWJibWh3eA%3D%3D"
                                    className="bg-white p-3 rounded-full hover:bg-red-500/20 hover:text-red-600 transition-all"
                                >
                                    <FaInstagram className='text-red-500 h-5 w-5' />
                                </motion.a>
                                <motion.a
                                 animate={{
                                    y: [0, -10, 0], // Moves up and down
                                  }}
                                  transition={{
                                    duration: 2, // Duration of one cycle
                                    repeat: Infinity, // Infinite loop
                                    ease: "easeInOut", // Smooth animation
                                  }}
                                    href="https://x.com/AbhishekQu93255?t=ByVpKhA45LWHCCoRRPqZig&s=09"
                                    className="bg-white p-3 rounded-full hover:bg-blue-500/20 hover:text-blue-600 transition-all"
                                >
                                    <FaTwitter className='text-blue-500 h-5 w-5' />
                                </motion.a>
                                <motion.a
                                 animate={{
                                    y: [0, -10, 0], // Moves up and down
                                  }}
                                  transition={{
                                    duration: 2, // Duration of one cycle
                                    repeat: Infinity, // Infinite loop
                                    ease: "easeInOut", // Smooth animation
                                  }}
                                    href="https://www.linkedin.com/in/abhishek-yadav-b2a96027a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                    className="bg-white p-3 rounded-full hover:bg-blue-500/20 hover:text-blue-500 transition-all"
                                >
                                    <IoLogoLinkedin className='text-blue-700 h-5 w-5' />
                                </motion.a>
                                <motion.a
                                 animate={{
                                    y: [0, -10, 0], // Moves up and down
                                  }}
                                  transition={{
                                    duration: 2, // Duration of one cycle
                                    repeat: Infinity, // Infinite loop
                                    ease: "easeInOut", // Smooth animation
                                  }}
                                    href="https://github.com/Abhitheshek"
                                    className="bg-white p-3 rounded-full hover:bg-slate-500/20 hover:text-white transition-all"
                                >
                                    <FaGithub className='text-black h-5 w-5' />
                                </motion.a>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="text-center mt-8 pt-8 border-t border-gray-800">
                        <motion.div
                        
                         className="text-gray-400 cursor-pointer font-semibold text-lg">
                            Created & Designed by Abhishek <motion.span
                             animate={{
                                scale :1.1 // Moves up and down
                              }}
                              transition={{
                                duration: 2, // Duration of one cycle
                                repeat: Infinity, // Infinite loop
                                ease: "easeInOut", // Smooth animation
                              }} 
                            >  <FaHeart
                            

                            className=' inline-block text-red-700 font-semibold w-5 h-5' />
                            </motion.span>
                        </motion.div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ContactUs;
