import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <div id="about" className="w-full min-h-full flex flex-col lg:flex-row items-center justify-center lg:bg-gradient-to-br from-stone-900 to-slate-800 bg-opacity-10 backdrop-blur-md rounded-lg md:gap-2 gap-0">
            <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
    className="left h-full w-full md:w-full lg:w-1/2 lg:ml-4"
>
    <motion.div 
       
        className="profile-card xl:h-[40vh] md:min-h-[80vh] w-full backdrop-blur-lg bg-opacity-10 bg-gradient-to-br from-stone-700 to-slate-800 border-2 rounded-lg border-blue-600 p-4 xl:p-4 md:py-16 sm:p-4"
    >
        <motion.div
           
            className="flex items-center mb-4"
        >
            <motion.img
                whileHover={{ scale: 1.1 }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                alt="Profile picture of a cartoon character" 
                className="rounded-full mr-4" 
                height="100" 
                src="https://storage.googleapis.com/a1aa/image/y1EuIwDW95bxEJPQzVjEo9GSS7nEdIBZrStdyz2qgDxucg6E.jpg" 
                width="100" 
            />
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <p>Name: <span className="font-bold text-white">Abhishek Yadav</span></p>
                <p>Age: <span className="font-bold text-white">20</span></p>
                <p>From: <span className="font-bold text-white">India</span></p>
            </motion.div>
        </motion.div>

        <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="font-bold text-lg mb-2"
        >
            SKILLS
        </motion.h2>

        <div>
            {/* Skills section with animations */}
            {[
                { name: "ReactJS", width: "80%" },
                { name: "NextJS", width: "70%" },
                { name: "JavaScript", width: "60%" },
                { name: "HTML + CSS", width: "90%" },
                { name: "Backend", width: "50%" }
            ].map((skill, index) => (
                <motion.div
                    key={index}
                   
                >
                    <p className="my-1">{skill.name}</p>
                    <div className="skills-bar bg-[#34cdfc] rounded-lg">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: skill.width }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className={`bg-[#fc9801] h-2 rounded-lg`}
                            style={{ width: skill.width }}
                        />
                    </div>
                </motion.div>
            ))}
        </div>
    </motion.div>
</motion.div>

            <div

                className="flex flex-col justify-center items-center Right h-full lg:w-1/2 w-full lg:mr-4">
                <div className=" hidden inner rounded-lg w-full xl:h-[40vh] md:min-h-[80vh] md:flex flex-wrap gap-4 items-center justify-center backdrop-blur-lg bg-opacity-10 bg-gradient-to-br from-stone-700 to-slate-800 border-2 border-blue-600 xl:py-12 lg:p-8 p-4 mt-6 mb-6">
                    {[
                        { src: "./webIcon/html-5.png", alt: "HTML Icon", classname: "md:block hidden lg:p-3 p-4 sm:p-3 hover:bg-white" },
                        { src: "./webIcon/css-3.png", alt: "CSS Icon", classname: "md:block hidden lg:p-3 p-4 sm:p-3 hover:bg-white" },
                        { src: "./webIcon/js.png", alt: "JavaScript Icon", classname: "lg:p-3 p-4 sm:p-3 hover:bg-white" },
                        { src: "./webIcon/Material UI.png", alt: "Material UI Icon", classname: "md:block hidden lg:p-3 p-4 sm:p-3 hover:bg-white" },
                        { src: "./webIcon/Tailwind CSS.png", alt: "Tailwind CSS Icon", classname: "lg:p-3 p-4 sm:p-3 hover:bg-white" },
                        { src: "./webIcon/Python.png", alt: "Python Icon", classname: "lg:p-3 p-4 sm:p-3 hover:bg-white" },
                        { src: "./webIcon/React.png", alt: "React Icon", classname: "lg:p-3 p-4 sm:p-3 hover:bg-white" },
                        { src: "./webIcon/TypeScript.png", alt: "TypeScript Icon", classname: "lg:p-3 p-4 sm:p-3 hover:bg-white" },
                        { src: "./webIcon/Node.js.png", alt: "Node.js Icon", classname: "lg:p-3 p-4 sm:p-3 hover:bg-white" },
                        { src: "./webIcon/NPM.png", alt: "NPM Icon", classname: "md:block hidden lg:p-3 p-4 sm:p-3 hover:bg-white" },
                        { src: "./webIcon/Express.png", alt: "Express Icon", classname: "lg:p-3 p-4 sm:p-3 hover:bg-white" },
                        { src: "./webIcon/Postman.png", alt: "Postman Icon", classname: "md:block hidden lg:p-3 p-4 sm:p-3 hover:bg-white" },
                        { src: "./webIcon/Nodemon.png", alt: "Nodemon Icon", classname: "md:block hidden lg:p-3 p-4 sm:p-3 hover:bg-white" },
                        { src: "./webIcon/MongoDB.png", alt: "MongoDB Icon", classname: "lg:p-3 p-4 sm:p-3 hover:bg-white" },
                        { src: "./webIcon/Mongoose.js.png", alt: "Mongoose.js Icon", classname: "md:block hidden lg:p-3 p-4 sm:p-3 hover:bg-white" },
                        { src: "./webIcon/Three.js.png", alt: "Three.js Icon", classname: "md:block hidden lg:p-3 p-4 sm:p-3 hover:bg-white" },
                        { src: "./webIcon/Next.js.png", alt: "Next.js Icon", classname: "lg:p-3 p-4 sm:p-3 hover:bg-white" },
                        { src: "./webIcon/Blender.png", alt: "Blender Icon", classname: "md:block hidden lg:p-3 p-4 sm:p-3 hover:bg-white" },
                    ].map((icon, index) => (
                        <div




                            key={index} id="skillicon" className={icon.classname} >
                            <img

                                src={icon.src} alt={icon.alt} className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16" />
                        </div>
                    ))}
                </div>
            </div>
        </div>

  )
}

export default About