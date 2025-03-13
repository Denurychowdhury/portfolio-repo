import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

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

        setTimeout(() => {
            Swal.fire({
                title: "Successfully Submitted!",
                icon: "success",
                draggable: true
            });

            setIsSubmitting(false);
            setFormData({ name: '', email: '', message: '' });
        }, 1000);
    };

    const contactDetails = [
        {
            url: "mailto:denuryc@email.com",
            icon: <FaEnvelope className="text-3xl" />,
            label: "denuryc@email.com"
        },
        {
            url: "tel:+8801625672075",
            icon: <FaPhone className="text-3xl" />,
            label: "+880 1625 672075"
        },
        {
            url: "https://wa.me/8801625672075",
            icon: <FaWhatsapp className="text-3xl text-green-500" />,
            label: "WhatsApp"
        }
    ];

    const socialLinks = [
        {
            url: "https://github.com/Denurychowdhury",
            icon: <FaGithub className="text-3xl" />,
            label: "GitHub"
        },
        {
            url: "https://www.linkedin.com/in/denury-chowdhury-796094243/",
            icon: <FaLinkedin className="text-3xl text-blue-500" />,
            label: "LinkedIn"
        }
    ];

    return (
        <section id={id} className="py-16 bg-black text-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
                    {/* Contact Info */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h2 className="text-4xl font-bold text-white mb-6 tracking-wide">Contact Me</h2>
                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                            Feel free to reach out if you have any questions, collaboration opportunities, or just want to connect!
                        </p>

                        <div className="space-y-4 mb-8">
                            {contactDetails.map((contact, index) => (
                                <div key={index} className="flex items-center space-x-4 text-gray-400 hover:text-white transition-colors">
                                    <a href={contact.url} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                                        {contact.icon}
                                        <span className="text-lg">{contact.label}</span>
                                    </a>
                                </div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center lg:justify-start space-x-8">
                            {socialLinks.map((link, index) => (
                                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer"
                                    aria-label={link.label} className="text-gray-400 hover:text-white transition-transform transform hover:scale-105">
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:w-1/2 w-full bg-gray-800 p-8 rounded-lg shadow-lg mx-auto max-w-2xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                                    className="w-full px-4 py-2 mt-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                                    className="w-full px-4 py-2 mt-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4"
                                    className="w-full px-4 py-2 mt-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                            </div>
                            <button type="submit"
                                className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
                                disabled={isSubmitting}>
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
