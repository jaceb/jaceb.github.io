import { Github, Linkedin, Mail } from 'lucide-react';


export default function Footer() {
    return (
        <footer className="relative z-10 py-12 px-6 border-t border-white/10">
            <div className="max-w-4xl mx-auto text-center">
                <div className="flex justify-center space-x-6 mb-8">
                    <a href="https://github.com/jaceb" className="hover:text-purple-400 transition-colors duration-300">
                        <Github className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/jacebriggs/" className="hover:text-purple-400 transition-colors duration-300">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="mailto:jacebriggswebdev@gmail.com" className="hover:text-purple-400 transition-colors duration-300">
                        <Mail className="w-6 h-6" />
                    </a>
                </div>

                <p className="text-gray-400">
                    © 2025 Jace Briggs. Crafted with React
                </p>
            </div>
        </footer>
    );
}