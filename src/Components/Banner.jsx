import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Facebook } from 'lucide-react';
import profile from '../assets/profile.jpg';

const Banner = () => {
    return (
        <div className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white h-screen flex flex-col md:flex-row items-center justify-center p-10 overflow-hidden">
            {/* Left Side - Text Content */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-center md:text-left z-10"
            >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                    Hi, I'm  <span className="text-purple-300">Frontend <br /> Developer</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-6">
                    I create beautiful and interactive web experiences.
                </p>

                {/* Social Links */}
                <div className="flex justify-center md:justify-start gap-6 mt-6 mb-5">
                    <a href="https://github.com/Denurychowdhury" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-all">
                        <Github size={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/denury-chowdhury-796094243/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-all">
                        <Linkedin size={30} />
                    </a>
                    <a href="https://www.facebook.com/denuryc.chowdhury" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-all">
                        <Facebook size={30} />
                    </a>
                </div>
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
                    className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full shadow-lg border-4 border-purple-500 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                />
            </motion.div>
        </div>
    );
};

export default Banner;
