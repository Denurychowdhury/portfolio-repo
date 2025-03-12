import React from 'react';
import { motion } from 'framer-motion';
import profile from '../assets/profile.jpg';

const Banner = () => {
    return (
        <div className="relative bg-gradient-to-r  from-blue-900 via-purple-900 to-indigo-900 text-white h-screen flex flex-col md:flex-row items-center justify-center p-10 overflow-hidden">
            {/* Left Side - Text Content */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-center md:text-left z-10"
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Hi, I'm a <br /> <span className="text-purple-300">Frontend Developer</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-6">
                    I create beautiful and interactive web experiences.
                </p>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300"
                >
                    <a href="/resume.pdf" download>
                        Resume
                    </a>
                </motion.button>
            </motion.div>

            {/* Right Side - Animated Image */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="mt-10 md:mt-0 md:ml-10 z-10"
            >
                <motion.img
                    src={profile}
                    alt="Profile Image"
                    className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-lg border-4 border-purple-500 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                />
            </motion.div>

            {/* Background Animated Circles */}

        </div>
    );
};

export default Banner;