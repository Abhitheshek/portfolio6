"use client"
import React, { useEffect } from "react";
import App from "./App";

import Goal from "./Goal.jsx";
// import Typewriter from 'typewriter-effect/dist/core';
import { IoMdMenu, IoMdClose, IoLogoLinkedin } from "react-icons/io";
import { useState } from "react";
import TicTacToe from "./TicTacToe.jsx";
// import { AnimatedTestimonialsDemo } from "./components/ui/Testimonial.jsx";
import ContactUs from "./Contectus.jsx";
import Mywork from "./Mywork.jsx";
import About from "./About";
import Landing from "./Landing";
import Navbar from "./Navbar";

const Test = () => {
    
    return (
        <>
            <div className="main overflow-x-hidden w-screen h-screen bg-gradient-to-br from-stone-800 to-slate-600">

                <Navbar/>
               

                <div className="w-full min-h-[100vh] lg:px-4 px-2 mb-4 flex flex-col gap-3">
                    {/* page1 */}
                   

                   <Landing/>

                    {/* page2 */}
                    
                     
                            <About />
                          
                    {/* page3 */}
                    <div id="work">
                        <Mywork />
                    </div>

                    {/* page4 */}
                    <div className="w-full h-screen hidden md:flex bg-gradient-to-br from-stone-900 to-slate-800 bg-opacity-10 backdrop-blur-md rounded-lg">
                        <div className="w-full h-screen">
                            <App />
                        </div>
                    </div>

                    {/* page5 */}
                    <div className="w-full min-h-screen md:flex-row justify-center items-center flex flex-col bg-gradient-to-br from-stone-900 to-slate-800 bg-opacity-10 backdrop-blur-md rounded-lg">
                        <Goal />
                    </div>

                    {/* page6 */}
                    <div className="w-full min-h-screen font-sans justify-center items-center md:flex flex-col bg-white bg-opacity-10 backdrop-blur-md rounded-lg">
                        <TicTacToe />
                    </div>

                    <div id="contact" className="w-full min-h-screen justify-center items-center md:flex flex-col bg-gradient-to-br from-stone-900 to-slate-800 bg-opacity-10 backdrop-blur-md rounded-lg">
                        <ContactUs />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Test;