
import { useState } from 'react';
import { EyeIcon } from 'lucide-react';

interface LandingProps {
  onEnter: () => void;
}

export const LandingSection = ({ onEnter }: LandingProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Spline 3D Background */}
      <div className="absolute inset-0">
        <iframe 
          src='https://my.spline.design/eyeonyou-FeU6DPllVSMduM8dbYS2MN2t/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="pointer-events-none"
        />
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Main Content */}
      <div className="relative z-10 text-center">
        <div className="mb-8 animate-fade-in-up">
          <EyeIcon 
            size={80} 
            className="mx-auto text-mystic-pink animate-eye-blink mb-6"
          />
        </div>
        
        <h1 className="text-8xl font-syne font-bold mb-6 text-shadow-glow animate-scale-in">
          a<span className="text-tribal-orange">ल</span>g
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-300">
          A Brand Not Confined to Consciousness, But Embracing All
        </p>
        
        <button
          onClick={onEnter}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`
            px-12 py-4 rounded-full glass-effect text-lg font-syne font-medium
            transition-all duration-300 hover:scale-105 animate-fade-in-up delay-500
            ${isHovered ? 'text-tribal-orange' : 'text-white'}
          `}
        >
          Enter the Vision
        </button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-1 h-12 bg-gradient-to-b from-mystic-pink to-transparent rounded-full" />
      </div>
    </section>
  );
};
