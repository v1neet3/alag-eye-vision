
import { useState } from 'react';
import { ExternalLinkIcon, HeartIcon, TrendingUpIcon, ShieldIcon, EyeIcon, GithubIcon, XIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: "HeartSync-Pro",
    description: "Connecting hearts through synchronized consciousness",
    details: "A revolutionary platform that synchronizes emotional states between individuals, fostering deeper connections and empathy through advanced biometric analysis and real-time emotional mapping.",
    techStack: ["React", "Node.js", "WebRTC", "TensorFlow", "Socket.io"],
    icon: HeartIcon,
    color: "from-pink-500 to-red-500",
    status: "Active",
    githubUrl: "https://github.com/yourusername/heartsync-pro",
    preview: "Real-time emotional synchronization platform"
  },
  {
    id: 2,
    title: "StocKast",
    description: "Predictive analytics through collective consciousness",
    details: "Harnessing the power of collective intuition to predict market trends and social movements through advanced AI algorithms and crowd-sourced sentiment analysis.",
    techStack: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL"],
    icon: TrendingUpIcon,
    color: "from-green-500 to-blue-500",
    status: "Beta",
    githubUrl: "https://github.com/yourusername/stockast",
    preview: "AI-powered market prediction platform"
  },
  {
    id: 3,
    title: "Fraudulent",
    description: "Exposing deception through awareness amplification",
    details: "A consciousness-driven fraud detection system that identifies patterns invisible to traditional methods using quantum computing principles and neural network analysis.",
    techStack: ["Python", "Scikit-learn", "React", "Flask", "MongoDB"],
    icon: ShieldIcon,
    color: "from-yellow-500 to-orange-500",
    status: "Development",
    githubUrl: "https://github.com/yourusername/fraudulent",
    preview: "Advanced fraud detection system"
  },
  {
    id: 4,
    title: "ALAG",
    description: "The flagship consciousness expansion platform",
    details: "Our core platform for exploring, expanding, and sharing consciousness across all dimensions of experience. A comprehensive ecosystem for digital enlightenment and community building.",
    techStack: ["React", "TypeScript", "Tailwind", "Supabase", "Framer Motion"],
    icon: EyeIcon,
    color: "from-purple-500 to-pink-500",
    status: "Live",
    githubUrl: "https://github.com/yourusername/alag",
    preview: "Consciousness expansion platform"
  }
];

export const ProjectsSection = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [mobileExpandedCard, setMobileExpandedCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle responsive design
  useState(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  const handleCardClick = (projectId: number) => {
    if (isMobile) {
      setMobileExpandedCard(mobileExpandedCard === projectId ? null : projectId);
    } else {
      setFlippedCard(flippedCard === projectId ? null : projectId);
    }
  };

  const closeMobileModal = () => {
    setMobileExpandedCard(null);
  };

  return (
    <section className="relative py-20 min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-deep-blue to-cosmic-purple" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-syne font-bold mb-6 text-shadow-glow">
            Projects & Collaborations
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Expanding consciousness through innovative projects that bridge 
            the gap between technology and human awareness. Each creation represents 
            a step forward in our collective digital evolution.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {projects.map((project) => (
            <div key={project.id} className="relative">
              {/* Desktop Flip Card */}
              <div
                className={`
                  relative h-80 cursor-pointer transition-all duration-300 hover:scale-105
                  ${isMobile ? 'hidden' : 'block'}
                `}
                style={{ perspective: '1000px' }}
                onClick={() => handleCardClick(project.id)}
              >
                <div className={`
                  relative w-full h-full transition-transform duration-700 preserve-3d
                  ${flippedCard === project.id ? 'rotate-y-180' : ''}
                `}>
                  {/* Front Side */}
                  <div className="absolute inset-0 backface-hidden rounded-2xl glass-effect p-6 flex flex-col justify-between shadow-xl">
                    <div>
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center mb-4 shadow-lg`}>
                        <project.icon size={28} className="text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-syne font-bold mb-3 text-white">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                        {project.preview}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className={`
                        px-3 py-1 rounded-full text-xs font-medium
                        ${project.status === 'Live' ? 'bg-green-500/80 text-white' : 
                          project.status === 'Active' ? 'bg-blue-500/80 text-white' :
                          project.status === 'Beta' ? 'bg-yellow-500/80 text-black' : 'bg-gray-500/80 text-white'}
                      `}>
                        {project.status}
                      </span>
                      <div className="text-tribal-orange">
                        <ExternalLinkIcon size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl glass-effect p-6 flex flex-col justify-between shadow-xl">
                    <div>
                      <h3 className="text-xl font-syne font-bold mb-3 text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-200 text-sm mb-4 leading-relaxed">
                        {project.details}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-tribal-orange mb-2">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.techStack.map((tech, index) => (
                            <span 
                              key={index}
                              className="text-xs bg-white/10 text-gray-200 px-2 py-1 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-tribal-orange to-sunset-purple text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <GithubIcon size={16} />
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* Mobile Card */}
              <div 
                className={`
                  relative h-80 cursor-pointer transition-all duration-300 hover:scale-105
                  ${isMobile ? 'block' : 'hidden'}
                `}
                onClick={() => handleCardClick(project.id)}
              >
                <div className="rounded-2xl glass-effect p-6 flex flex-col justify-between shadow-xl h-full">
                  <div>
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center mb-4 shadow-lg`}>
                      <project.icon size={28} className="text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-syne font-bold mb-3 text-white">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {project.preview}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className={`
                      px-3 py-1 rounded-full text-xs font-medium
                      ${project.status === 'Live' ? 'bg-green-500/80 text-white' : 
                        project.status === 'Active' ? 'bg-blue-500/80 text-white' :
                        project.status === 'Beta' ? 'bg-yellow-500/80 text-black' : 'bg-gray-500/80 text-white'}
                    `}>
                      {project.status}
                    </span>
                    <div className="text-tribal-orange">
                      <ExternalLinkIcon size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Modal */}
        {isMobile && mobileExpandedCard && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gradient-to-br from-deep-blue to-cosmic-purple rounded-2xl p-6 max-w-sm w-full max-h-[80vh] overflow-y-auto relative">
              <button 
                onClick={closeMobileModal}
                className="absolute top-4 right-4 text-white hover:text-tribal-orange transition-colors"
              >
                <XIcon size={24} />
              </button>
              
              {(() => {
                const project = projects.find(p => p.id === mobileExpandedCard);
                if (!project) return null;
                
                return (
                  <>
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center mb-4 shadow-lg`}>
                      <project.icon size={28} className="text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-syne font-bold mb-3 text-white">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-200 text-sm mb-4 leading-relaxed">
                      {project.details}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-tribal-orange mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, index) => (
                          <span 
                            key={index}
                            className="text-xs bg-white/10 text-gray-200 px-2 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-gradient-to-r from-tribal-orange to-sunset-purple text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium w-full"
                    >
                      <GithubIcon size={16} />
                      View on GitHub
                    </a>
                  </>
                );
              })()}
            </div>
          </div>
        )}

        {/* Explore Button */}
        <div className="text-center mb-16">
          <Button 
            asChild
            className="bg-gradient-to-r from-tribal-orange to-sunset-purple hover:from-sunset-purple hover:to-tribal-orange text-white px-8 py-4 text-lg font-syne font-semibold rounded-2xl shadow-2xl hover:shadow-tribal-orange/25 transition-all duration-300 hover:scale-105"
          >
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <GithubIcon size={24} />
              Explore All Repositories
            </a>
          </Button>
        </div>

        {/* Collaboration CTA */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="glass-effect rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-syne font-bold mb-6 text-shadow-glow">
              Let's Build Something Together
            </h3>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Ready to embark on a journey of digital consciousness expansion? 
              Whether you're looking to collaborate on revolutionary projects or 
              explore new dimensions of technological possibility, I'm here to help 
              manifest your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                className="bg-gradient-to-r from-mystic-pink to-cosmic-purple hover:from-cosmic-purple hover:to-mystic-pink text-white px-6 py-3 font-medium rounded-xl shadow-lg hover:shadow-mystic-pink/25 transition-all duration-300"
              >
                <a href="mailto:hello@alag.com">
                  Start a Conversation
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="border-2 border-tribal-orange text-tribal-orange hover:bg-tribal-orange hover:text-white px-6 py-3 font-medium rounded-xl transition-all duration-300"
              >
                <a href="#contact">
                  View Contact Details
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};
