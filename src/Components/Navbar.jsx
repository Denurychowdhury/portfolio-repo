import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-r from-[#2E0A47] to-[#1A4D87] text-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between p-5">
                <motion.a
                    href="#"
                    className="text-3xl font-extrabold tracking-wide text-[#9B6AE1]"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Denury Chowdhury
                </motion.a>
                <motion.div
                    className="hidden md:flex space-x-6 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <motion.a
                        href="#about"
                        className="hover:text-[#7E8DFF] transition"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        About Me
                    </motion.a>
                    <motion.a
                        href="#skills"
                        className="hover:text-[#7E8DFF] transition"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Skills
                    </motion.a>
                    <motion.a
                        href="#projects"
                        className="hover:text-[#7E8DFF] transition"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Projects
                    </motion.a>
                    <motion.a
                        href="#education"
                        className="hover:text-[#7E8DFF] transition"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Education
                    </motion.a>
                    <motion.button
                        className="border-2 border-[#7E8DFF] px-4 py-1 rounded-lg text-[#7E8DFF] hover:bg-[#7E8DFF] hover:text-[#2E0A47] transition"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <a href="/resume.pdf" download>
                            Resume
                        </a>
                    </motion.button>
                </motion.div>
                <motion.button
                    className="md:hidden text-[#9B6AE1]"
                    onClick={() => setIsOpen(!isOpen)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                >
                    {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                </motion.button>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden flex flex-col items-center bg-gradient-to-b from-[#3D1F5C] to-[#1A4D87] py-4 space-y-4 shadow-lg"
                    >
                        <motion.a
                            href="#about"
                            className="text-white hover:text-[#7E8DFF] transition"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            About Me
                        </motion.a>
                        <motion.a
                            href="#skills"
                            className="text-white hover:text-[#7E8DFF] transition"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Skills
                        </motion.a>
                        <motion.a
                            href="#projects"
                            className="text-white hover:text-[#7E8DFF] transition"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Projects
                        </motion.a>
                        <motion.a
                            href="#education"
                            className="text-white hover:text-[#7E8DFF] transition"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Education
                        </motion.a>
                        <motion.button
                            className="border-2 border-white px-4 py-1 rounded-lg text-white hover:bg-white hover:text-[#3D1F5C] transition"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <a href="/resume.pdf" download>
                                Resume
                            </a>
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
