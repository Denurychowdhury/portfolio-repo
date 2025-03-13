import React from 'react';
import { motion } from 'framer-motion';

const Education = ({ id }) => {
    return (
        <section id={id} className="py-16 bg-gradient-to-br from-black via-blue-900 to-gray-900 text-white">
            <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-100 tracking-wide uppercase">
                Education
            </h2>

            {/* Canadian University of Bangladesh */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.5 }}
                className="bg-gradient-to-r from-blue-800 to-blue-600 p-8 rounded-2xl shadow-xl mb-8 mx-6 md:mx-auto max-w-2xl transform transition-transform hover:scale-105"
            >
                <h3 className="text-3xl font-semibold text-gray-50 mb-4">
                    Canadian University of Bangladesh
                </h3>
                <p className="text-lg text-gray-200 font-medium">
                    <strong>Bachelor of Science in Computer Science and Engineering (CSE)</strong>
                </p>
                <p className="text-sm text-gray-300 italic mb-6">
                    2024 – Present
                </p>
                <ul className="list-disc pl-6 text-gray-200 space-y-3">
                    <li>Focusing on software development, algorithms, AI, and machine learning.</li>
                    <li>Participating in coding competitions, hackathons, and team projects.</li>
                    <li>Relevant coursework: Programming, Databases, Networks, and Software Engineering.</li>
                </ul>
            </motion.div>

            {/* Diploma in Engineering */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.5 }}
                className="bg-gradient-to-r from-blue-800 to-blue-600 p-8 rounded-2xl shadow-xl mb-8 mx-6 md:mx-auto max-w-2xl transform transition-transform hover:scale-105"
            >
                <h3 className="text-3xl font-semibold text-gray-50 mb-4">
                    Sherpur Polytechnic Institute
                </h3>
                <p className="text-lg text-gray-200 font-medium">
                    <strong>Diploma in Engineering (Computer Science and Technology)</strong>
                </p>
                <p className="text-sm text-gray-300 italic mb-6">
                    2019 – 2023
                </p>
                <ul className="list-disc pl-6 text-gray-200 space-y-3">
                    <li>Gained knowledge in programming, system design, and software development.</li>
                    <li>Hands-on experience with C, C++, Java, and Python.</li>
                    <li>Worked on projects involving problem-solving and application development.</li>
                    <li>Key studies: Data Structures, OOP, OS, and Computer Architecture.</li>
                </ul>
            </motion.div>
        </section>

    );
};

export default Education;