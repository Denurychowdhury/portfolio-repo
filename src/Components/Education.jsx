import React from 'react';
import { motion } from 'framer-motion';

const Education = ({ id }) => {
    return (
        <section id={id} className="py-12 bg-gradient-to-r from-black to-blue-900 text-white">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-100">
                Education
            </h2>

            {/* Canadian University of Bangladesh */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.5 }}
                className="bg-blue-700 p-6 rounded-lg shadow-lg mb-6 mx-4 md:mx-auto max-w-2xl"
            >
                <h3 className="text-2xl font-semibold text-gray-100 mb-2">
                    Canadian University of Bangladesh
                </h3>
                <p className="text-lg text-gray-200 mb-1">
                    <strong>Bachelor of Science in Computer Science and Engineering (CSE)</strong>
                </p>
                <p className="text-sm text-gray-300 italic mb-4">
                    2024 – Present
                </p>
                <ul className="list-disc pl-6 text-gray-200 space-y-2">
                    <li>
                        Currently pursuing a degree in Computer Science and Engineering, focusing on core areas such as software development, algorithms, data structures, artificial intelligence, and machine learning.
                    </li>
                    <li>
                        Actively participating in coding competitions, hackathons, and collaborative projects to enhance practical skills.
                    </li>
                    <li>
                        Relevant coursework: Programming Languages, Database Management Systems, Computer Networks, Web Development, and Software Engineering.
                    </li>
                </ul>
            </motion.div>

            {/* Diploma in Engineering */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.5 }}
                className="bg-blue-700 p-6 rounded-lg shadow-lg mb-6 mx-4 md:mx-auto max-w-2xl"
            >
                <h3 className="text-2xl font-semibold text-gray-100 mb-2">
                    Sherpur polytechnic institute
                </h3>
                <p className="text-lg text-gray-200 mb-1">
                    <strong>Diploma in Engineering (Computer Science and Technology)</strong>
                </p>
                <p className="text-sm text-gray-300 italic mb-4">
                    2019 – 2023
                </p>
                <ul className="list-disc pl-6 text-gray-200 space-y-2">
                    <li>
                        Completed a comprehensive diploma program in Computer Science, gaining foundational knowledge in programming, system design, and software development.
                    </li>
                    <li>
                        Developed hands-on experience in languages such as C, C++, Java, and Python.
                    </li>
                    <li>
                        Completed projects and assignments focused on problem-solving, system analysis, and application development.
                    </li>
                    <li>
                        Key areas of study: Data Structures, Object-Oriented Programming, Operating Systems, and Computer Architecture.
                    </li>
                </ul>
            </motion.div>
        </section>


    );
};

export default Education;