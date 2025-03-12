import React from 'react';
import { motion } from "framer-motion";

const Skills = ({ id }) => {
    return (
        <section id={id} className="py-20 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-white mb-12">
                    Skills & Expertise
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* React.js */}
                    <div className="bg-purple-700 p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-2xl font-bold text-white mb-4">React.js</h3>
                        <p className="text-purple-100 leading-relaxed">
                            Building dynamic, fast, and user-friendly interfaces with React.
                        </p>
                    </div>

                    {/* JavaScript */}
                    <div className="bg-blue-600 p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-2xl font-bold text-white mb-4">JavaScript</h3>
                        <p className="text-blue-100 leading-relaxed">
                            Mastery in JavaScript, ES6+ features, and asynchronous programming.
                        </p>
                    </div>

                    {/* Node.js */}
                    <div className="bg-purple-700 p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-2xl font-bold text-white mb-4">Node.js</h3>
                        <p className="text-purple-100 leading-relaxed">
                            Developing fast and scalable backend APIs with Node.js.
                        </p>
                    </div>

                    {/* MongoDB */}
                    <div className="bg-blue-600 p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-2xl font-bold text-white mb-4">MongoDB</h3>
                        <p className="text-blue-100 leading-relaxed">
                            Utilizing MongoDB for flexible and scalable database management.
                        </p>
                    </div>

                    {/* Express.js */}
                    <div className="bg-purple-700 p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-2xl font-bold text-white mb-4">Express.js</h3>
                        <p className="text-purple-100 leading-relaxed">
                            Building fast and efficient RESTful APIs with Express.js.
                        </p>
                    </div>

                    {/* HTML5 & CSS3 */}
                    <div className="bg-blue-600 p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-2xl font-bold text-white mb-4">HTML5 & CSS3</h3>
                        <p className="text-blue-100 leading-relaxed">
                            Crafting responsive and visually appealing web designs.
                        </p>
                    </div>

                    {/* Git & Version Control */}
                    <div className="bg-purple-700 p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-2xl font-bold text-white mb-4">Git & Version Control</h3>
                        <p className="text-purple-100 leading-relaxed">
                            Efficiently managing codebases with Git and version control workflows.
                        </p>
                    </div>

                    {/* UI/UX Design */}
                    <div className="bg-blue-600 p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-2xl font-bold text-white mb-4">UI/UX Design</h3>
                        <p className="text-blue-100 leading-relaxed">
                            Creating intuitive and user-centered designs for seamless experiences.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;