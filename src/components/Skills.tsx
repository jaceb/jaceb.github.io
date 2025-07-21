import { Code } from 'lucide-react';


interface Skill {
    name: string;
    level: number;
    icon: React.ReactNode;
}

const skills: Skill[] = [
    { name: "React", level: 95, icon: <Code className="w-5 h-5" /> },
    { name: "TypeScript", level: 90, icon: <Code className="w-5 h-5" /> },
    { name: "Node.js", level: 85, icon: <Code className="w-5 h-5" /> }
];

export default function Skills() {
    return (
        <section id="skills" className="relative z-10 py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Skills & Expertise
                </h2>

                <div className="space-y-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="group">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center space-x-3">
                                    <div className="text-purple-400 group-hover:scale-110 transition-transform">
                                        {skill.icon}
                                    </div>
                                    <span className="text-xl font-semibold">{skill.name}</span>
                                </div>

                            </div>

                            <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                                    style={{ width: `${100}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}