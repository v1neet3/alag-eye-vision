import { useState } from 'react';
import { EyeIcon } from 'lucide-react';
interface LandingProps {
  onEnter: () => void;
}
export const LandingSection = ({
  onEnter
}: LandingProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Spline 3D Background */}
      <div className="absolute inset-0">
        <iframe src='https://my.spline.design/spiriteyesfollow-h70gTOYWXyg28sNgoTd0Fsar/' frameBorder='0' width='100%' height='100%' />
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 text-center pointer-events-auto">
        {/* ALAG Logo */}
        <div className="mb-12 animate-fade-in-up">
          <img src="/lovable-uploads/3efe12e6-a0a4-4e27-aca9-31b4a6b9aece.png" alt="ALAG Logo" className="mx-auto h-32 w-auto mb-8 opacity-90 hover:opacity-100 transition-opacity duration-300" />
          <EyeIcon size={60} className="mx-auto text-mystic-pink animate-eye-blink" />
        </div>
        
        {/* Brand Name - Updated to match logo style */}
        <h1 className="text-7xl font-syne font-bold mb-8 text-shadow-glow animate-scale-in tracking-wider">aलg</h1>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in-up delay-300 leading-relaxed">
          A Brand Not Confined to Consciousness, But Embracing All
        </p>
        
        <button onClick={onEnter} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={`
            px-12 py-4 rounded-full glass-effect text-lg font-syne font-medium
            transition-all duration-300 hover:scale-105 animate-fade-in-up delay-500
            border border-white border-opacity-20 hover:border-opacity-40
            ${isHovered ? 'text-tribal-orange shadow-lg shadow-tribal-orange/20' : 'text-white'}
          `}>
          Enter the Vision
        </button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float pointer-events-none">
        <div className="w-1 h-12 bg-gradient-to-b from-mystic-pink to-transparent rounded-full" />
      </div>
    </section>;
};