
import { useEffect, useState } from 'react';
import { EyeIcon } from 'lucide-react';

export const VisionSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const eyeScale = Math.min(1 + scrollY * 0.001, 2);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-blue via-cosmic-purple to-deep-blue" />
      
      {/* Interactive Eye */}
      <div 
        className="absolute inset-0 flex items-center justify-center opacity-30"
        style={{ transform: `scale(${eyeScale})` }}
      >
        <div className="relative">
          <div className="w-80 h-80 rounded-full bg-gradient-to-br from-sunset-purple to-mystic-pink animate-pulse-slow" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <EyeIcon size={120} className="text-white animate-iris-shift" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-6xl font-syne font-bold mb-8 text-shadow-glow">
          The Vision
        </h2>
        
        <div className="space-y-8 text-lg leading-relaxed">
          <p className="opacity-90 animate-fade-in-up">
            In the depths of consciousness lies an eye that sees beyond the veil of ordinary perception. 
            ALAG represents the awakening of this inner vision—a recognition that awareness is not 
            limited by the boundaries we perceive.
          </p>
          
          <p className="opacity-90 animate-fade-in-up delay-300">
            We are the bridge between the seen and unseen, the conscious and unconscious, 
            the individual and the collective. Through art, collaboration, and innovation, 
            we explore the infinite possibilities of human expression.
          </p>
          
          <p className="opacity-90 animate-fade-in-up delay-500 text-xl font-medium text-tribal-orange">
            "The eye sees only what the mind is prepared to comprehend." - Robertson Davies
          </p>
        </div>
      </div>
    </section>
  );
};
