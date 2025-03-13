import React from "react";
import { motion } from "framer-motion";
import "animate.css";
import { FaReact, FaJsSquare, FaNodeJs, FaDatabase, FaServer, FaHtml5, FaGitAlt, FaPalette } from "react-icons/fa";

const skillsData = [
    { name: "React.js", icon: <FaReact />, color: "bg-purple-800", textColor: "text-purple-300", animation: "animate__pulse animate__infinite" },
    { name: "JavaScript", icon: <FaJsSquare />, color: "bg-blue-800", textColor: "text-blue-300", animation: "animate__fadeIn animate__infinite" },
    { name: "Node.js", icon: <FaNodeJs />, color: "bg-purple-800", textColor: "text-purple-300", animation: "animate__bounce animate__infinite" },
    { name: "MongoDB", icon: <FaDatabase />, color: "bg-blue-800", textColor: "text-blue-300", animation: "animate__flash animate__infinite" },
    { name: "Express.js", icon: <FaServer />, color: "bg-purple-800", textColor: "text-purple-300", animation: "animate__rubberBand animate__infinite" },
    { name: "HTML5 & CSS3", icon: <FaHtml5 />, color: "bg-blue-800", textColor: "text-blue-300", animation: "animate__tada animate__infinite" },
    { name: "Git & Version Control", icon: <FaGitAlt />, color: "bg-purple-800", textColor: "text-purple-300", animation: "animate__swing animate__infinite" },
    { name: "UI/UX Design", icon: <FaPalette />, color: "bg-blue-800", textColor: "text-blue-300", animation: "animate__heartBeat animate__infinite" }
];

const Skills = ({ id }) => {
    return (
        <section id={id} className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-white mb-12 animate__animated animate__fadeInDown">
                    Skills & Expertise
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillsData.map((skill, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            className={`${skill.color} p-8 rounded-xl shadow-lg border border-gray-700 transform transition-transform duration-300 hover:shadow-[0_0_20px_rgba(138,43,226,0.8)] ${skill.animation}`}
                        >
                            <div className="flex flex-col items-center">
                                <div className="text-5xl text-white mb-4">{skill.icon}</div>
                                <h3 className="text-2xl font-bold text-white mb-4">{skill.name}</h3>
                                <p className={`${skill.textColor} leading-relaxed`}>{skill.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
