import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Smartphone, Star } from 'lucide-react';
import Hero from './Hero.tsx';
import Navigation from './Navigation.tsx';
import Footer from './Footer.tsx';
import Skills from './Skills.tsx';

interface MousePosition {
    x: number;
    y: number;
}

interface Project {
    title: string;
    description: string;
    tech: string[];
    image: string;
    github: string;
    live: string;
    featured?: boolean;
}



interface Stat {
    label: string;
    value: number;
}

interface AnimatedCounterProps {
    end: number;
    duration?: number;
}

const Portfolio: React.FC = () => {
    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const projects: Project[] = [
        {
            title: "TBD",
            description: "Full-stack React application with payment integration, real-time inventory, and admin dashboard.",
            tech: ["React", "Node.js", "MongoDB", "Stripe"],
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
            github: "#",
            live: "#",
            featured: true
        },
        {
            title: "TBD",
            description: "Collaborative project management tool with real-time updates and team communication.",
            tech: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
            github: "#",
            live: "#"
        },
        {
            title: "TBD",
            description: "Beautiful weather app with location-based forecasts and interactive charts.",
            tech: ["React", "D3.js", "OpenWeather API", "Tailwind"],
            image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
            github: "#",
            live: "#"
        }
    ];


    const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 2000 }) => {
        const [count, setCount] = useState<number>(0);

        useEffect(() => {
            let start = 0;
            const increment = end / (duration / 16);
            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);
            return () => clearInterval(timer);
        }, [end, duration]);

        return <span>{count}</span>;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
            {/* Animated Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl transition-all duration-300"
                    style={{
                        left: mousePosition.x - 192,
                        top: mousePosition.y - 192,
                    }}
                />
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-2xl animate-pulse delay-1000" />
            </div>

            {/* Navigation */}
            <Navigation />

            <Hero />

            {/* Projects Section */}
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r pb-2 from-purple-400 to-pink-40  bg-clip-text text-transparent">
                Projects Coming Soon
            </h2>
            {/* <section id="projects" className="relative z-10 py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Featured Projects
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div key={index} className="group relative bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
                                {project.featured && (
                                    <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                                        <Star className="w-4 h-4 mr-1" />
                                        Featured
                                    </div>
                                )}

                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                    <div className="absolute top-4 right-4 flex space-x-2">
                                        <a href={project.github} className="bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors">
                                            <Github className="w-4 h-4" />
                                        </a>
                                        <a href={project.live} className="bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors">
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4 text-sm">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, techIndex) => (
                                            <span key={techIndex} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>*/}

            {/* Skills Section */}
            <Skills />

            {/* Contact Section */}
            <section id="contact" className="relative z-10 py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 pb-2 bg-clip-text text-transparent">
                        Let's Work Together
                    </h2>

                    <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                        Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with amazing people.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a href="mailto:jacebriggswebdev@gmail.com" className="group bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center">
                            <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                            Send Email
                        </a>

                        <a href="../public/Jace-Briggs-Resume.pdf" className="border-2 border-purple-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105">
                            Download Resume
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Portfolio;