
import { useState } from 'react';
import { ExternalLinkIcon, HeartIcon, TrendingUpIcon, ShieldIcon, EyeIcon } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "HeartSync-Pro",
    description: "Connecting hearts through synchronized consciousness",
    details: "A revolutionary platform that synchronizes emotional states between individuals, fostering deeper connections and empathy.",
    icon: HeartIcon,
    color: "from-pink-500 to-red-500",
    status: "Active"
  },
  {
    id: 2,
    title: "StocKast",
    description: "Predictive analytics through collective consciousness",
    details: "Harnessing the power of collective intuition to predict market trends and social movements.",
    icon: TrendingUpIcon,
    color: "from-green-500 to-blue-500",
    status: "Beta"
  },
  {
    id: 3,
    title: "Fraudulent",
    description: "Exposing deception through awareness amplification",
    details: "A consciousness-driven fraud detection system that identifies patterns invisible to traditional methods.",
    icon: ShieldIcon,
    color: "from-yellow-500 to-orange-500",
    status: "Development"
  },
  {
    id: 4,
    title: "ALAG",
    description: "The flagship consciousness expansion platform",
    details: "Our core platform for exploring, expanding, and sharing consciousness across all dimensions of experience.",
    icon: EyeIcon,
    color: "from-purple-500 to-pink-500",
    status: "Live"
  }
];

export const ProjectsSection = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const handleCardClick = (projectId: number) => {
    setFlippedCard(flippedCard === projectId ? null : projectId);
  };

  return (
    <section className="relative py-20 min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-deep-blue to-cosmic-purple" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-syne font-bold mb-6 text-shadow-glow">
            Projects & Collaborations
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Expanding consciousness through innovative projects that bridge 
            the gap between technology and human awareness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative h-80 cursor-pointer perspective-1000"
              onClick={() => handleCardClick(project.id)}
            >
              <div className={`
                relative w-full h-full transition-transform duration-700 transform-style-preserve-3d
                ${flippedCard === project.id ? 'rotate-y-180' : ''}
              `}>
                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden rounded-2xl glass-effect p-6 flex flex-col justify-between">
                  <div>
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center mb-4`}>
                      <project.icon size={24} className="text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-syne font-bold mb-3">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className={`
                      px-3 py-1 rounded-full text-xs font-medium
                      ${project.status === 'Live' ? 'bg-green-500' : 
                        project.status === 'Active' ? 'bg-blue-500' :
                        project.status === 'Beta' ? 'bg-yellow-500' : 'bg-gray-500'}
                    `}>
                      {project.status}
                    </span>
                    <ExternalLinkIcon size={16} className="text-gray-400" />
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl glass-effect p-6 flex flex-col justify-center">
                  <div className="text-center">
                    <project.icon size={40} className="mx-auto mb-4 text-mystic-pink animate-pulse-slow" />
                    <p className="text-gray-200 leading-relaxed">
                      {project.details}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
