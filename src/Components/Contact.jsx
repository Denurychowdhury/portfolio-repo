import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Contact = ({ id }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Handle form submission logic here
        setTimeout(() => {
            Swal.fire({
                title: "Successfully Submitted!",
                icon: "success",
                draggable: true
            });
            setIsSubmitting(false);
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        }, 1000); // Simulate API call delay
    };

    const socialLinks = [
        {
            url: "https://github.com/Denurychowdhury",
            icon: "fab fa-github",
            label: "GitHub"
        },
        {
            url: "https://www.linkedin.com/in/denury-chowdhury-796094243/",
            icon: "fab fa-linkedin",
            label: "LinkedIn"
        },
    ];

    return (
        <section id={id} className="py-16 bg-black text-white">
            <div className="max-w-6xl mx-auto px-4">
                {/* Flex Layout for Left and Right Sections */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
                    {/* Left Section - Content */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-4xl font-bold text-white mb-6 tracking-wide">Contact Me</h2>
                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                            Feel free to reach out to me if you have any questions, collaboration opportunities, or just want to connect!
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>

                        {/* Social Links */}
                        <div className="flex justify-center lg:justify-start space-x-8 mb-8">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-105"
                                >
                                    <i className={`${link.icon} text-3xl`}></i>
                                    <span className="text-lg">{link.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Section - Contact Form */}
                    <div className="lg:w-1/2 w-full bg-gray-800 p-8 rounded-lg shadow-lg mx-auto max-w-2xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 mt-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 mt-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-2 mt-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
