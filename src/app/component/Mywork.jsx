import React from 'react';
import { motion } from 'framer-motion';

const Mywork = () => {
    // Project data
    const projects = [
        {
            image: '/image/img4.png',
            title: 'Netflix Website',
            duration: '2 Days',
            techStack: ['React', 'Typescript', 'Api', 'Javascript', 'Tailwind'],
            link: '/UnderConstruction.jsx'
        },
        {
            image: '/image/img5.png',
            title: 'DeepseaAI',
            duration: '10 Days',
            techStack: ['Next.js', 'Typescript', 'Api', 'Backend', 'Tailwind'],
            link: '/UnderConstruction.jsx'
        },
        {
            image: '/image/img6.png',
            title: 'AI Trip Planner',
            duration: '4 Days',
            techStack: ['Next.js', 'Typescript', 'Api', 'Backend', 'Tailwind']
        },
        {
            image: '/image/img7.png',
            title: 'AI Chrome Extension',
            duration: '6 Days',
            techStack: ['React', 'Typescript', 'Api', 'Javascript', 'Tailwind'],
            link: '/UnderConstruction.jsx'
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
            link: '/UnderConstruction.jsx'
        }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { 
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

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
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
                className="w-full min-h-screen justify-center items-center md:flex flex-col font-sans bg-gradient-to-br from-stone-900 to-slate-800 bg-opacity-10 backdrop-blur-md rounded-lg p-4"
            >
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="my-10 text-center text-4xl font-extrabold text-orange-600"
                >
                    My Work
                </motion.h1>

                <motion.div 
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-20 md:px-10 gap-6"
                >
                    {projects.map((project, index) => (
                        <a href={project.link} key={index}>
                            <motion.div
                                variants={cardVariants}
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.3 }}
                                className="grid min-h-72 gap-2 border-gray-600 border rounded-lg overflow-hidden shadow-xl p-4 hover:shadow-xl bg-gradient-to-br from-stone-800 to-slate-900"
                            >
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="bg-gradient-to-br from-stone-600 to-slate-900 p-2 rounded-lg shadow-lg"
                                >
                                    <motion.img
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 }}
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-40 object-cover rounded-lg mb-2"
                                    />
                                    <motion.p 
                                        initial={{ x: -20, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 }}
                                        className="text-sm text-yellow-500 mb-1"
                                    >
                                        {project.title}
                                    </motion.p>
                                    <motion.p 
                                        initial={{ x: -20, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 }}
                                        className="text-sm text-blue-500 mb-1 line-clamp-1"
                                    >
                                        <strong className="text-xl">📅</strong> {project.duration}
                                    </motion.p>
                                </motion.div>

                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6 }}
                                    className="p-4 font-sans text-center shadow-lg rounded-lg bg-gradient-to-br from-stone-700 to-slate-800"
                                >
                                    <motion.h3 
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.7 }}
                                        className="text-xl font-bold text-orange-600 mb-2"
                                    >
                                        Tech Stack
                                    </motion.h3>
                                    <motion.div 
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.8 }}
                                        className="flex flex-shrink-0 flex-wrap gap-2 items-center justify-center"
                                    >
                                        {project.techStack.map((tech, i) => (
                                            <motion.span
                                                key={i}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.9 + (i * 0.1) }}
                                                className={`px-3 py-2 lg:text-sm text-xs text-white rounded-full ${getTechStackColor(tech)}`}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </a>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Mywork;
