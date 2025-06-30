
import { useState } from 'react';
import { EyeIcon } from 'lucide-react';

interface LandingProps {
  onEnter: () => void;
}

export const LandingSection = ({ onEnter }: LandingProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    // Delay the transition to allow the animation to play
    setTimeout(() => {
      onEnter();
    }, 800);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Spline 3D Background - Fullscreen with biblically accurate angel eyes */}
      <div className="absolute inset-0">
        <iframe 
          src='https://my.spline.design/biblicallyaccurateangeleyesandrings-UpGTGshnay6Y3FlY9H9MZumA/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="pointer-events-none"
          style={{
            filter: 'contrast(1.1) brightness(0.9)',
          }}
        />
      </div>
      
      {/* Mystical overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none" />
      
      {/* Floating particles/orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-mystic-pink rounded-full animate-pulse opacity-60" 
             style={{ animationDelay: '0s' }} />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-tribal-orange rounded-full animate-pulse opacity-40"
             style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-sunset-purple rounded-full animate-pulse opacity-50"
             style={{ animationDelay: '4s' }} />
      </div>

      {/* Main Portal Content */}
      <div className={`relative z-10 text-center pointer-events-auto transition-all duration-800 ${
        isClicked ? 'scale-110 opacity-0' : 'scale-100 opacity-100'
      }`}>
        
        {/* Mystical Eye Symbol */}
        <div className="mb-8 animate-fade-in-up">
          <div className="relative inline-block">
            <EyeIcon 
              size={80} 
              className="text-mystic-pink animate-eye-blink drop-shadow-2xl" 
            />
            {/* Eye glow effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-mystic-pink/20 rounded-full blur-xl animate-pulse-slow" />
            </div>
          </div>
        </div>
        
        {/* Custom ALAG Typography - Portal Button */}
        <div className="mb-12">
          <button
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`
              relative group px-16 py-8 rounded-full transition-all duration-500 transform
              ${isHovered ? 'scale-110' : 'scale-100'}
              ${isClicked ? 'scale-125' : ''}
              backdrop-blur-lg bg-gradient-to-r from-black/40 via-deep-blue/30 to-black/40
              border-2 border-mystic-pink/30 hover:border-mystic-pink/60
              shadow-2xl hover:shadow-mystic-pink/30
              animate-fade-in-up delay-300
            `}
            disabled={isClicked}
          >
            {/* Portal glow effect */}
            <div className={`
              absolute inset-0 rounded-full transition-all duration-500
              ${isHovered ? 'bg-gradient-to-r from-mystic-pink/20 via-tribal-orange/20 to-sunset-purple/20' : 'bg-transparent'}
              ${isClicked ? 'animate-ping bg-mystic-pink/40' : ''}
            `} />
            
            {/* Radial glow on hover */}
            {isHovered && (
              <div className="absolute inset-0 rounded-full animate-pulse">
                <div className="w-full h-full bg-gradient-radial from-mystic-pink/30 via-tribal-orange/20 to-transparent rounded-full blur-xl" />
              </div>
            )}
            
            {/* Custom ALAG Typography */}
            <div className="relative flex items-center justify-center gap-1">
              <span className={`
                text-6xl font-bold tracking-wider transition-all duration-300
                bg-gradient-to-r from-mystic-pink via-tribal-orange to-sunset-purple bg-clip-text text-transparent
                ${isHovered ? 'animate-pulse drop-shadow-[0_0_20px_rgba(236,72,153,0.5)]' : ''}
                font-syne
              `}>
                a
              </span>
              <span className={`
                text-6xl font-bold tracking-wider transition-all duration-300
                bg-gradient-to-r from-tribal-orange via-sunset-purple to-mystic-pink bg-clip-text text-transparent
                ${isHovered ? 'animate-pulse drop-shadow-[0_0_20px_rgba(249,115,22,0.5)]' : ''}
                font-syne
              `}>
                लg
              </span>
            </div>
            
            {/* Subtle motion line under text */}
            <div className={`
              absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-mystic-pink to-transparent
              transition-all duration-500
              ${isHovered ? 'w-full opacity-100' : 'w-0 opacity-0'}
            `} />
          </button>
        </div>
        
        {/* Mystic tagline */}
        <p className={`
          text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-500 leading-relaxed
          transition-all duration-300
          ${isHovered ? 'text-gray-200' : 'text-gray-300'}
        `}>
          Step into the realm of consciousness beyond ordinary perception
        </p>
        
        {/* Tribal symbols */}
        <div className="flex items-center justify-center gap-8 animate-fade-in-up delay-700">
          <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-tribal-orange" />
          <div className="w-2 h-2 bg-mystic-pink rounded-full animate-pulse" />
          <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-tribal-orange" />
        </div>
      </div>
      
      {/* Minimal footer */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center pointer-events-none">
        <div className="text-xs text-gray-500 opacity-60">
          Enter the Vision • Expand Consciousness
        </div>
      </div>
      
      {/* Transition overlay */}
      {isClicked && (
        <div className="absolute inset-0 bg-black animate-fade-in pointer-events-none z-50" 
             style={{ animationDuration: '800ms' }} />
      )}
    </section>
  );
};
