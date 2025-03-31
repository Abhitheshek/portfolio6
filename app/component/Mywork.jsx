import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';




const Mywork = () => {
    // Project data
    const projects = [
        {
            image: '/image/img4.png',
            title: 'Code-Reviewer',
            duration: '2 Days',
            techStack: ['React', 'Typescript', 'Api', 'Javascript', 'Tailwind'],
            link: 'https://code-review-frontend-lilac.vercel.app/'
        },
        {
            image: '/image/img5.png',
            title: 'DeepseaAI',
            duration: '10 Days',
            techStack: ['Next.js', 'Typescript', 'Api', 'Backend', 'Tailwind'],
             link: 'https://multi-model-ai-abhishek.vercel.app/'
        },
        {
            image: '/image/img6.png',
            title: 'AI Trip Planner',
            duration: '4 Days',
            techStack: ['Next.js', 'Typescript', 'Api', 'Backend', 'Tailwind'],
            link: 'https://aitrip-planner-eight.vercel.app/'
        },
        {
            image: '/image/img7.png',
            title: 'AI Chrome Extension',
            duration: '6 Days',
            techStack: ['React', 'Typescript', 'Api', 'Javascript', 'Tailwind'],
             link: '/new'
        },
        {
            image: '/image/img8.png',
            title: 'GuessWord',
            duration: '2 Days',
            techStack: ['React', 'Backend', 'Api', 'Javascript', 'Tailwind'],
            link: "https://guessword-4.vercel.app/"
        },
        {
            image: '/image/img9.png',
            title: 'AI Powered Canvas',
            duration: '7 Days',
            techStack: ['Next.js', 'Typescript', 'Api', 'Backend', 'Tailwind'],
             link: '/new'
        }
    ];

    // Animation variants
  

   

    const getTechStackColor = (tech) => {
        switch(tech) {
            case 'React':
                return 'bg-green-600';
            case 'Typescript':
                return 'bg-blue-500';
            case 'Api':
                return 'bg-orange-500';
            case 'Javascript':
                return 'bg-yellow-500';
            case 'Tailwind':
                return 'bg-sky-500';
            case 'Next.js':
                return 'bg-black';
            case 'Backend':
                return 'bg-red-500';
            default:
                return 'bg-gray-500';
        }
    };

    return (
        <div>
            
            <div 
               
                className="w-full min-h-screen justify-center items-center md:flex flex-col font-sans bg-gradient-to-br from-stone-900 to-slate-800 bg-opacity-10 backdrop-blur-md rounded-lg p-4"
            >
                <h1 
                    
                    className="my-10 text-center text-4xl font-extrabold text-orange-600"
                >
                    My Work
                </h1>

                <div 
                   
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-20 md:px-10 gap-6"
                >
                    {projects.map((project, index) => (
                       
                        <Link 
                        href={project.link}
                         key={index}>
                            <div
                               
                                className="grid min-h-72 gap-2 border-gray-600 border rounded-lg overflow-hidden shadow-xl p-4 hover:shadow-xl bg-gradient-to-br from-stone-800 to-slate-900"
                            >
                                <div 
                                   
                                    className="bg-gradient-to-br from-stone-600 to-slate-900 p-2 rounded-lg shadow-lg"
                                >
                                    <img
                                      
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-40 object-cover hover:scale-105 transition-all rounded-lg mb-2"
                                    />
                                    <p 
                                     
                                        className="text-sm text-yellow-500 mb-1"
                                    >
                                        {project.title}
                                    </p>
                                    <p 
                                        
                                        className="text-sm text-blue-500 mb-1 line-clamp-1"
                                    >
                                        <strong className="text-xl">📅</strong> {project.duration}
                                    </p>
                                </div>

                                <div 
                                   
                                    className="p-4 font-sans text-center shadow-lg rounded-lg bg-gradient-to-br from-stone-700 to-slate-800"
                                >
                                    <h3 
                                        
                                        className="text-xl font-bold text-orange-600 mb-2"
                                    >
                                        Tech Stack
                                    </h3>
                                    <div 
                                        
                                        className="flex flex-shrink-0 flex-wrap gap-2 items-center justify-center"
                                    >
                                        {project.techStack.map((tech, i) => (
                                            <span
                                                key={i}
                                               
                                                className={`px-3 py-2 lg:text-sm text-xs hover:scale-75 transition-all text-white rounded-full ${getTechStackColor(tech)}`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Mywork;
