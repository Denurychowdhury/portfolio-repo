import React from 'react';
import { motion } from 'framer-motion';
import profile from '../assets/profile.jpg'; // Replace with your image path

const About = ({ id }) => {
    return (
        <section id={id} className="bg-[#1a1a2e] text-white py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
                {/* Left Side - Circular Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 flex justify-center md:justify-start"
                >
                    <motion.img
                        src={profile}
                        alt="Profile Image"
                        className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-lg border-4 border-purple-500 object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                </motion.div>

                {/* Right Side - Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1"
                >
                    <h2 className="text-4xl font-bold text-purple-400 mb-6">
                        About Me
                    </h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg text-gray-300 leading-relaxed"
                    >
                        I’m <span className="text-purple-300 font-semibold">Denury chowdhury</span>, a passionate <span className="text-purple-300 font-semibold">Junior Web Developer</span> with a diploma in Computer Engineering. I specialize in building responsive and user-friendly web applications.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg text-gray-300 leading-relaxed mt-4"
                    >
                        My expertise includes <span className="text-purple-300 font-semibold">ReactJS, JavaScript, Tailwind CSS, HTML, CSS</span>, and backend technologies like <span className="text-purple-300 font-semibold">Node.js, Express.js, MongoDB, and Firebase</span>.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-lg text-gray-300 leading-relaxed mt-4"
                    >
                        I’m dedicated to continuous learning and aspire to become a proficient <span className="text-purple-300 font-semibold">full-stack developer</span>, always staying updated with the latest technologies.
                    </motion.p>

                    {/* Animated Button */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="mt-8"
                    >
                    </motion.div>
                </motion.div>
            </div>

            {/* Background Animated Circles */}
        </section>

    );
};

export default About;