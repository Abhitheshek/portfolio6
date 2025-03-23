"use client"
import React, { useState } from 'react'
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoMdMenu, IoMdClose, IoLogoLinkedin } from "react-icons/io";

const Navbar = () => {
    const [open, setopen] = useState(false);
  return (
    <>
     {/* Navbar */}
     <nav className="sticky top-1 z-40 flex items-center justify-between lg:px-6 px-3 lg:py-4 py-2 bg-black bg-opacity-10 backdrop-blur-md rounded-md lg:m-4 m-2">
                    <h1 className="md:block font-serif hidden text-xl font-bold text-orange-600 cursor-pointer">AbhiTheShek</h1>
                    <IoMdMenu onClick={() => setopen(prev => !prev)} className="md:hidden h-8 w-10 text-white" />
                    <ul className="md:flex hidden space-x-6 text-black font-medium">
                        <li><a href="#home" className=" px-3 py-2 border rounded-full hover:text-orange-700 text-white">Home</a></li>
                        <li><a href="#about" className="hover:text-orange-700 text-white px-3 py-2 border rounded-full">About</a></li>
                        <li><a href="#work" className="hover:text-orange-700 text-white px-3 py-2 border rounded-full">Work</a></li>
                        <li><a href="#contact" className="hover:text-orange-700 text-white px-3 py-2 border rounded-full">Contact</a></li>
                    </ul>
                    <a href="#contact">
                        <button className="bg-orange-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-orange-500">Hire me</button>
                    </a>
                </nav>

                {open && (
                    <div className="md:hidden h-[70vh] w-full absolute top-20 p-2 z-50">
                        <div className="h-full w-full flex flex-col items-center justify-center gap-5 bg-gradient-to-br from-stone-600 to-slate-700 bg-opacity-5 backdrop-blur-xl rounded-md text-white">
                            <IoMdClose onClick={() => setopen(prev => !prev)} className="absolute top-6 right-6 text-3xl rounded-full m-2 border" />
                            <div className="flex w-full flex-col gap-4 items-center justify-center text-black font-semibold font-serif px-4">
                                <div className="w-full text-center">
                                    <a href="#home" onClick={() => setopen(prev => !prev)}>
                                        <div className="hover:text-orange-700 text-white py-3 rounded-xl w-full bg-orange-500">Home</div>
                                    </a>
                                </div>
                                <div className="w-full text-center">
                                    <a href="#about" onClick={() => setopen(prev => !prev)}>
                                        <div className="hover:text-orange-700 text-white py-3 rounded-xl w-full bg-orange-500">About</div>
                                    </a>
                                </div>
                                <div className="w-full text-center">
                                    <a href="#work" onClick={() => setopen(prev => !prev)}>
                                        <div className="hover:text-orange-700 text-white py-3 rounded-xl w-full bg-orange-500">Work</div>
                                    </a>
                                </div>
                                <div className="w-full text-center">
                                    <a href="#contact" onClick={() => setopen(prev => !prev)}>
                                        <div className="hover:text-orange-700 text-white py-3 rounded-xl w-full bg-orange-500">Contact</div>
                                    </a>
                                </div>
                                <div className="text-center mt-6">
                                    <div className="flex justify-center space-x-4">
                                        <motion.a
                                            animate={{
                                                y: [0, -10, 0], // Moves up and down
                                            }}
                                            transition={{
                                                duration: 2, // Duration of one cycle
                                                repeat: Infinity, // Infinite loop
                                                ease: "easeInOut", // Smooth animation
                                            }}
                                            href="https://www.instagram.com/quantumabhishek?igsh=MXRpOHVndWJibWh3eA%3D%3D" className="bg-white p-3 rounded-full hover:bg-red-500/20 hover:text-red-600 transition-all">
                                            <FaInstagram className='text-red-500 h-6 w-6' />
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
                                            href="https://x.com/AbhishekQu93255?t=ByVpKhA45LWHCCoRRPqZig&s=09" className="bg-white p-3 rounded-full hover:bg-blue-500/20 hover:text-blue-600 transition-all">
                                            <FaTwitter className='text-blue-500 h-6 w-6' />
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
                                            href="https://www.linkedin.com/in/abhishek-yadav-b2a96027a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="bg-white p-3 rounded-full hover:bg-blue-500/20 hover:text-blue-500 transition-all">
                                            <IoLogoLinkedin className='text-blue-700 h-6 w-6' />
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
                                            href="https://github.com/Abhitheshek" className="bg-white p-3 rounded-full hover:bg-slate-500/20 hover:text-white transition-all">
                                            <FaGithub className='h-6 w-6' />
                                        </motion.a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

    </>
  )
}

export default Navbar