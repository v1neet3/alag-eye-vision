
import { useState, useEffect } from 'react';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${isScrolled ? 'bg-black bg-opacity-80 backdrop-blur-md' : 'bg-transparent'}
    `}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/3efe12e6-a0a4-4e27-aca9-31b4a6b9aece.png" 
              alt="ALAG Logo"
              className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
            <span className="text-2xl font-syne font-bold tracking-wider">ALAG</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#vision" className="text-white hover:text-mystic-pink transition-colors duration-300">Vision</a>
            <a href="#philosophy" className="text-white hover:text-mystic-pink transition-colors duration-300">Philosophy</a>
            <a href="#collections" className="text-white hover:text-mystic-pink transition-colors duration-300">Collections</a>
            <a href="#projects" className="text-white hover:text-mystic-pink transition-colors duration-300">Projects</a>
            <a href="#contact" className="text-white hover:text-mystic-pink transition-colors duration-300">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};
