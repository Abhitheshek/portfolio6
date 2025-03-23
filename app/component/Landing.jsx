import React from 'react'
import { motion } from 'framer-motion'
import { useTypewriter } from 'react-simple-typewriter';
import Avatar from './Avatar';

const Landing = () => {

    const [text] = useTypewriter({
        words: ['Developer', 'Backend Developer', 'Frontend Developer'], // You can add more roles
        loop: true,
        delaySpeed: 300,
        typeSpeed: 50,
        deleteSpeed: 50
    });
  return (
    <>
     <div id="home" className="w-full min-h-[90vh] flex flex-col md:flex-row items-start md:text-left justify-center bg-gradient-to-br from-stone-900 to-slate-800 rounded-lg pb-6">
                        <div className="flex flex-col justify-center md:items-end items-start left h-full md:w-1/2 w-full ml-4   mt-10">
                            <motion.div


                                className="detail font-bold">
                                <span className="text-white inline-block lg:text-5xl md:text-4xl text-5xl pt-12 md:pb-6 lg:pb-5 pb-4">Hii,There</span>
                                <div className="space-x-2 mb-4">
                                    <span className="text-white text-4xl sm:text-3xl lg:text-4xl font-bold">I'm</span>
                                    <span className="text-orange-600 text-3xl sm:text-3xl lg:text-4xl">Abhishek</span>
                                    <span className="text-white text-3xl sm:text-3xl lg:text-4xl">Yadav</span>
                                </div>
                                <div className="mb-4">
                                    <span className="text-white text-3xl sm:text-3xl lg:text-3xl">I'm a </span>

                                    <span className="text-orange-700 md:inline-block text-2xl sm:text-3xl" id="typed"> {text}</span>
                                </div>
                                <div className="text-lg  flex sm:text-xl text-orange-900 mb-6 max-w-md mx-auto lg:mx-0 ">More Than Code: My Creative Process</div>
                                {/* <div className="md:hidden w-full pr-4">
                                    <p className="text-xl text-orange-800 py-4 pr-4 overflow-hidden text-wrap break-words leading-relaxed">
                                        I'm passionate about building user-friendly applications that make a difference in people's lives. Let's connect and create something amazing together
                                    </p>
                                </div> */}

                                <a href="/new">
                                    <button className="text-sm inline-block bg-orange-700 px-5 py-3 rounded-lg hover:bg-orange-500 shadow-lg transition md:mt-0 mt-5   ">Download CV</button>
                                </a>
                            </motion.div>
                        </div>
                        <div

                            className="Right hidden h-full w-1/2 mr-4 md:flex items-center justify-center">
                            <Avatar />
                        </div>
                        <div className="Right md:hidden h-full w-full pt-10 mr-4 flex items-center justify-center">
                            <motion.img


                                animate={{
                                    y: [0, 10, 0], // Moves up and down
                                }}
                                transition={{
                                    duration: 2, // Duration of one cycle
                                    repeat: Infinity, // Infinite loop
                                    ease: "easeInOut", // Smooth animation
                                }}
                                src="./view-3d-man-holding-laptop-Photoroom.png" alt="img" />
                        </div>
                    </div>
    </>
  )
}

export default Landing