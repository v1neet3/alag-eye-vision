import { useState, useEffect } from 'react';
import { EyeIcon } from 'lucide-react';

interface LandingProps {
  onEnter: () => void;
}

export const LandingSection = ({ onEnter }: LandingProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);
  const [splineLoaded, setSplineLoaded] = useState(false);

  useEffect(() => {
    // Generate random floating particles
    const newParticles = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 4
    }));
    setParticles(newParticles);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  };

  const handleClick = () => {
    setIsClicked(true);
    // Delay the transition to allow the animation to play
    setTimeout(() => {
      onEnter();
    }, 800);
  };

  const handleSplineLoad = () => {
    setSplineLoaded(true);
    console.log('Spline scene loaded successfully');
  };

  const handleSplineError = () => {
    console.log('Spline scene failed to load, using fallback background');
    setSplineLoaded(false);
  };

  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden cursor-none"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive Spline 3D Background with fallback */}
      <div className="absolute inset-0">
        {/* Enhanced fallback gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 transition-opacity duration-1000 ${splineLoaded ? 'opacity-20' : 'opacity-100'}`}>
          {/* Animated background elements when Spline fails */}
          {!splineLoaded && (
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000" />
              <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-500" />
            </div>
          )}
        </div>
        
        {/* Spline iframe with working URL */}
        <iframe 
          src='https://my.spline.design/untitled-7b1fcba70b07e2ecb5d59e85e13b6cc8/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="pointer-events-none relative z-10"
          style={{
            filter: `contrast(1.1) brightness(0.8) hue-rotate(${mousePosition.x * 0.3}deg)`,
            transform: `perspective(1000px) rotateX(${(mousePosition.y - 50) * 0.05}deg) rotateY(${(mousePosition.x - 50) * 0.05}deg)`,
            transition: 'transform 0.1s ease-out, filter 0.3s ease-out'
          }}
          onLoad={handleSplineLoad}
          onError={handleSplineError}
          title="ALAG 3D Scene"
        />
      </div>
      
      {/* Dynamic parallax overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none"
        style={{
          transform: `translateX(${(mousePosition.x - 50) * 0.02}px) translateY(${(mousePosition.y - 50) * 0.02}px)`
        }}
      />
      
      {/* Interactive floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 bg-mystic-pink rounded-full animate-pulse opacity-60"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              transform: `translate(${(mousePosition.x - 50) * 0.3}px, ${(mousePosition.y - 50) * 0.3}px)`,
              transition: 'transform 0.2s ease-out'
            }}
          />
        ))}
      </div>

      {/* Interactive cursor follower */}
      <div 
        className="absolute w-6 h-6 pointer-events-none z-20"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="w-full h-full bg-gradient-radial from-mystic-pink/40 via-tribal-orange/20 to-transparent rounded-full animate-pulse" />
      </div>

      {/* Main Portal Content with mouse-reactive effects */}
      <div className={`relative z-10 text-center pointer-events-auto transition-all duration-800 ${
        isClicked ? 'scale-110 opacity-0' : 'scale-100 opacity-100'
      }`}>
        
        {/* Interactive Mystical Eye Symbol */}
        <div className="mb-8 animate-fade-in-up">
          <div 
            className="relative inline-block"
            style={{
              transform: `rotateX(${(mousePosition.y - 50) * 0.2}deg) rotateY(${(mousePosition.x - 50) * 0.2}deg)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <EyeIcon 
              size={80} 
              className="text-mystic-pink animate-eye-blink drop-shadow-2xl" 
              style={{
                filter: `hue-rotate(${mousePosition.x * 2}deg)`
              }}
            />
            {/* Dynamic eye glow effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="w-20 h-20 bg-mystic-pink/20 rounded-full blur-xl animate-pulse-slow"
                style={{
                  transform: `scale(${1 + (mousePosition.x / 100) * 0.3})`,
                  opacity: 0.2 + (mousePosition.y / 100) * 0.3
                }}
              />
            </div>
          </div>
        </div>
        
        {/* Interactive ALAG Portal Button */}
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
            style={{
              transform: `${isHovered ? 'scale(1.1)' : 'scale(1)'} perspective(1000px) rotateX(${(mousePosition.y - 50) * 0.1}deg) rotateY(${(mousePosition.x - 50) * 0.1}deg)`,
              boxShadow: `0 20px 40px rgba(236, 72, 153, ${0.1 + (mousePosition.x / 100) * 0.2})`
            }}
            disabled={isClicked}
          >
            {/* Dynamic portal glow effect */}
            <div className={`
              absolute inset-0 rounded-full transition-all duration-500
              ${isHovered ? 'bg-gradient-to-r from-mystic-pink/20 via-tribal-orange/20 to-sunset-purple/20' : 'bg-transparent'}
              ${isClicked ? 'animate-ping bg-mystic-pink/40' : ''}
            `} 
            style={{
              background: isHovered ? 
                `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(236, 72, 153, 0.3), rgba(249, 115, 22, 0.2), transparent)` : 
                'transparent'
            }} />
            
            {/* Interactive radial glow */}
            {isHovered && (
              <div 
                className="absolute inset-0 rounded-full animate-pulse"
                style={{
                  background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(236, 72, 153, 0.4) 0%, rgba(249, 115, 22, 0.2) 50%, transparent 100%)`
                }}
              />
            )}
            
            {/* Custom ALAG Typography with interactive effects */}
            <div className="relative flex items-center justify-center gap-1">
              <span className={`
                text-6xl font-bold tracking-wider transition-all duration-300
                bg-gradient-to-r from-mystic-pink via-tribal-orange to-sunset-purple bg-clip-text text-transparent
                ${isHovered ? 'animate-pulse drop-shadow-[0_0_20px_rgba(236,72,153,0.5)]' : ''}
                font-syne
              `}
              style={{
                filter: `hue-rotate(${mousePosition.x}deg) brightness(${1 + (mousePosition.y / 100) * 0.3})`
              }}>
                a
              </span>
              <span className={`
                text-6xl font-bold tracking-wider transition-all duration-300
                bg-gradient-to-r from-tribal-orange via-sunset-purple to-mystic-pink bg-clip-text text-transparent
                ${isHovered ? 'animate-pulse drop-shadow-[0_0_20px_rgba(249,115,22,0.5)]' : ''}
                font-syne
              `}
              style={{
                filter: `hue-rotate(${mousePosition.x * 0.5}deg) brightness(${1 + (mousePosition.y / 100) * 0.2})`
              }}>
                लg
              </span>
            </div>
            
            {/* Dynamic motion line */}
            <div className={`
              absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-mystic-pink to-transparent
              transition-all duration-500
              ${isHovered ? 'w-full opacity-100' : 'w-0 opacity-0'}
            `} 
            style={{
              background: isHovered ? 
                `linear-gradient(90deg, transparent, rgba(236, 72, 153, ${0.5 + (mousePosition.x / 100) * 0.5}), transparent)` : 
                'transparent'
            }} />
          </button>
        </div>
        
        {/* Interactive mystic tagline */}
        <p className={`
          text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-500 leading-relaxed
          transition-all duration-300
          ${isHovered ? 'text-gray-200' : 'text-gray-300'}
        `}
        style={{
          transform: `translateY(${(mousePosition.y - 50) * 0.05}px)`,
          opacity: 0.7 + (mousePosition.y / 100) * 0.3
        }}>
          Step into the realm of consciousness beyond ordinary perception
        </p>
        
        {/* Interactive tribal symbols */}
        <div 
          className="flex items-center justify-center gap-8 animate-fade-in-up delay-700"
          style={{
            transform: `translateX(${(mousePosition.x - 50) * 0.1}px)`
          }}
        >
          <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-tribal-orange" />
          <div 
            className="w-2 h-2 bg-mystic-pink rounded-full animate-pulse"
            style={{
              transform: `scale(${1 + (mousePosition.x / 100) * 0.5})`
            }}
          />
          <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-tribal-orange" />
        </div>
      </div>
      
      {/* Interactive minimal footer */}
      <div 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center pointer-events-none"
        style={{
          opacity: 0.4 + (mousePosition.y / 100) * 0.4
        }}
      >
        <div className="text-xs text-gray-500">
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
