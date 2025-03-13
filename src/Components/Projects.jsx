import React, { useEffect, useState } from 'react';

const Projects = ({ id }) => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('/project.json')
            .then((res) => res.json())
            .then((data) => setProjects(data));
    }, []);

    return (
        <section id={id} className="py-16 bg-gradient-to-r from-blue-900 via-black to-blue-900">
            <div className="container mx-auto px-4 text-center">
                {/* Section Header */}
                <h1 className="text-4xl font-bold text-white mb-12">My Projects</h1>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((i) => (
                        <div
                            key={i.id}
                            className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-r from-blue-900 via-black to-blue-900"
                        >
                            {/* Project Image */}
                            <img
                                className="w-full h-48 object-cover"
                                src={i.imageUrl}
                                alt={i.title}
                            />

                            {/* Project Details */}
                            <div className="px-6 py-4 text-white">
                                {/* Title */}
                                <h2 className="font-bold text-2xl mb-2">{i.title}</h2>

                                {/* Description with fixed height */}
                                <p className="text-base mb-4 h-24 overflow-hidden">{i.description}</p>

                                {/* Technology Stack with fixed height */}
                                <div className="mb-4 h-24 overflow-hidden">
                                    <h3 className="font-semibold text-gray-300 mb-2">Tech Stack</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {i.techStack.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Links */}
                                <div className="flex gap-3">
                                    {i.githubClientLink && (
                                        <a
                                            href={i.githubClientLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700 transition-colors duration-300"
                                        >
                                            Client Code
                                        </a>
                                    )}
                                    {i.livePreviewLink && (
                                        <a
                                            href={i.livePreviewLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700 transition-colors duration-300"
                                        >
                                            Live Preview
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
