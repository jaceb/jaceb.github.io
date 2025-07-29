import { ArrowRight } from 'lucide-react';


export default function Hero() {
    return (
        <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
            <div className="text-center max-w-4xl mx-auto">
                <div className="mb-8">
                    <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
                        <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                            <img
                                src="/code-cat.png"
                                alt="Profile"
                                className="w-28 h-28 rounded-full object-fill"
                            />
                        </div>
                    </div>
                </div>

                <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent animate-pulse">
                    React Developer
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                    Creating exceptional digital experiences with modern web technologies
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="cursor-pointer group bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                        View My Work
                        <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="cursor-pointer border-2 border-purple-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105">
                        Get In Touch
                    </button>
                </div>
            </div>
        </section>
    );

}

