import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io';

const ComingSoon = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center px-4">
            <div className="max-w-2xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Profile Image */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="mb-8"
                    >
                        <img
                            src="https://storage.googleapis.com/a1aa/image/y1EuIwDW95bxEJPQzVjEo9GSS7nEdIBZrStdyz2qgDxucg6E.jpg" // Add your profile image
                            alt="Profile"
                            className="w-24 h-24 rounded-full mx-auto border-2 border-orange-500 shadow-lg"
                        />
                    </motion.div>

                    {/* Main Title */}
                    <h1 className="text-4xl font-bold text-orange-500 mb-4">
                        Coming Soon
                    </h1>

                    {/* Description */}
                    <p className="text-lg text-gray-300 mb-8">
                        
                    </p>

                    {/* Progress Bar */}
                    <div className="w-full max-w-md mx-auto h-2 bg-gray-700 rounded-full overflow-hidden mb-8">
                        <motion.div
                            className="h-full bg-orange-500"
                            initial={{ width: "0%" }}
                            animate={{ width: "33%" }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                    </div>

                    {/* Social Links */}
                  <div className="text-center">
                              
                               <div className="flex justify-center space-x-4">
                                 <a
                                    href="https://www.instagram.com/quantumabhishek?igsh=MXRpOHVndWJibWh3eA%3D%3D"
                                   className="bg-white p-5 rounded-full hover:bg-red-500/20 hover:text-red-600 transition-all"
                                 >
                                   <FaInstagram className='text-red-500 h-6 w-6' />
                                 </a>
                                 <a
                                  href="https://x.com/AbhishekQu93255?t=ByVpKhA45LWHCCoRRPqZig&s=09"
                                   className="bg-white p-5 rounded-full hover:bg-blue-500/20 hover:text-blue-600 transition-all"
                                 >
                                 <FaTwitter className='text-blue-500 h-6 w-6' />
                                 </a>
                                 <a
                                    href="https://www.linkedin.com/in/abhishek-yadav-b2a96027a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                   className="bg-white p-5 rounded-full hover:bg-blue-500/20 hover:text-blue-500 transition-all"
                                 >
                                   <IoLogoLinkedin className='text-blue-700 h-6 w-6' />
                                 </a>
                                 <a
                                    href="https://github.com/Abhitheshek"
                                   className="bg-white p-5 rounded-full hover:bg-slate-500/20 hover:text-white transition-all"
                                 >
                                  <FaGithub className='h-6 w-6 text-black ' />
                                 </a>
                               </div>
                             </div>

                    {/* Contact Link */}
                   
                </motion.div>
            </div>
        </div>
    );
};

export default ComingSoon;
