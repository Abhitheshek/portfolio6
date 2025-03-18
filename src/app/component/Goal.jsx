import React from 'react';
import { motion } from 'framer-motion';

const Goal = () => {
  // Fade up animation for cards
  const fadeUpVariants = {
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

  // Circle expansion animation
  const circleVariants = {
    hidden: { scale: 1 },
    hover: { 
      scale: 9,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="max-w-full mx-auto p-6">
      {/* Title Animation */}
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className='text-center md:text-4xl text-3xl font-extrabold text-orange-500 mb-12'
      >
        Goals for 2025
      </motion.h1>

      <div className="flex flex-col md:flex-wrap md:flex-row gap-12 items-center justify-center py-8">
        {/* ML Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariants}
          whileHover={{ scale: 1.05 }}
          className="group card flex-none md:w-[40%] w-[100%] backdrop-blur-lg bg-opacity-50 bg-black rounded-2xl overflow-hidden p-6 relative"
        >
          <motion.div 
            variants={circleVariants}
            initial="hidden"
            whileHover="hover"
            className="circle absolute top-[-75px] right-[-75px] h-32 w-32 bg-yellow-500 rounded-full"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="relative z-10 m-6"
          >
            <h2 className="text-white font-bold text-2xl mb-4">
              <span className='text-red-500 font-extrabold'>ML</span>:To make decisions without explicit programming.
            </h2>
            <p className="text-white text-lg">
              Start: <span className="text-yellow-400 font-bold">No </span>
            </p>
          </motion.div>
        </motion.div>

        {/* DevOps Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariants}
          whileHover={{ scale: 1.05 }}
          className="group card flex-none md:w-[40%] w-[100%] backdrop-blur-lg bg-opacity-50 bg-black rounded-2xl overflow-hidden p-6 relative"
        >
          <motion.div 
            variants={circleVariants}
            initial="hidden"
            whileHover="hover"
            className="circle absolute top-[-75px] right-[-75px] h-32 w-32 bg-red-500 rounded-full"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="relative z-10 m-6"
          >
            <h2 className="text-white font-bold text-2xl mb-4">
              <span className='text-yellow-500'>DevOps</span>: enhance the delivery of high-quality software.
            </h2>
            <p className="text-white text-lg">
              Start: <span className="text-yellow-400 font-bold">Yes</span>
            </p>
          </motion.div>
        </motion.div>

        {/* DSA Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariants}
          whileHover={{ scale: 1.05 }}
          className="group card flex-none md:w-[40%] w-[100%] backdrop-blur-lg bg-opacity-50 bg-black rounded-2xl overflow-hidden p-6 relative"
        >
          <motion.div 
            variants={circleVariants}
            initial="hidden"
            whileHover="hover"
            className="circle absolute top-[-75px] right-[-75px] h-32 w-32 bg-purple-500 rounded-full"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="relative z-10 m-6"
          >
            <h2 className="text-white font-bold text-2xl mb-4">
              <span className='text-pink-500'>DSA</span>:organise & manipulate data efficiently to solve problems
            </h2>
            <p className="text-white text-lg">
              Start: <span className="text-yellow-400 font-bold">Yes</span>
            </p>
          </motion.div>
        </motion.div>

        {/* Hackathons Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariants}
          whileHover={{ scale: 1.05 }}
          className="group card flex-none md:w-[40%] w-[100%] backdrop-blur-lg bg-opacity-50 bg-black rounded-2xl overflow-hidden p-6 relative"
        >
          <motion.div 
            variants={circleVariants}
            initial="hidden"
            whileHover="hover"
            className="circle absolute top-[-75px] right-[-75px] h-32 w-32 bg-pink-500 rounded-full"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="relative z-10 m-6"
          >
            <h2 className="text-white font-bold text-2xl mb-4">
              Participating in <span className='text-purple-500'>hackathons</span> and working on various projects
            </h2>
            <p className="text-white text-lg">
              Start: <span className="text-yellow-400 font-bold">Yes</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Goal;
