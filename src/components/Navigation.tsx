import { Github, Linkedin } from 'lucide-react';

export default function Navigation() {
    return (
        <nav className="relative z-10 fixed top-0 w-full bg-black/10 backdrop-blur-lg border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Jace Briggs
                    </div>
                    <div className="hidden md:flex space-x-8">
                        {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-purple-400 transition-colors duration-300">
                                {item}
                            </a>
                        ))}
                    </div>
                    <div className="flex space-x-4">
                        <a href="https://github.com/jaceb" className="hover:text-purple-400 transition-colors duration-300">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/jacebriggs/" className="hover:text-purple-400 transition-colors duration-300">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>

    );
}