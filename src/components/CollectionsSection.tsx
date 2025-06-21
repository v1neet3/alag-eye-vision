
import { useState } from 'react';
import { EyeIcon, ImageIcon, PaletteIcon } from 'lucide-react';

const collections = [
  {
    id: 1,
    title: "Cosmic Consciousness",
    description: "Explore the depths of universal awareness through digital art",
    icon: EyeIcon,
    color: "from-cosmic-purple to-mystic-pink",
    image: "/lovable-uploads/a93d782a-be9d-4141-b1dc-5de5b3a2c78d.png"
  },
  {
    id: 2,
    title: "Tribal Visions",
    description: "Ancient wisdom meets modern expression",
    icon: PaletteIcon,
    color: "from-tribal-orange to-sunset-purple",
    image: "/lovable-uploads/836475d6-a699-424e-b07f-a2a4088f367b.png"
  },
  {
    id: 3,
    title: "Inner Landscapes",
    description: "Journey through the topography of the mind",
    icon: ImageIcon,
    color: "from-soft-cyan to-cosmic-purple",
    image: "/lovable-uploads/43cba144-a027-4797-a9ca-5263b0a733be.png"
  }
];

export const CollectionsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="relative py-20 min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-blue to-black" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-syne font-bold mb-6 text-shadow-glow">
            Collections & Art
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Each piece is a window into different dimensions of consciousness, 
            crafted to awaken the observer's inner vision.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="group relative overflow-hidden rounded-2xl glass-effect cursor-pointer transition-all duration-500 hover:scale-105"
              onMouseEnter={() => setHoveredCard(collection.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${collection.color} opacity-60`} />
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 h-80 flex flex-col justify-end">
                <div className="mb-4">
                  <collection.icon 
                    size={40} 
                    className={`transition-all duration-500 ${
                      hoveredCard === collection.id ? 'animate-eye-blink' : ''
                    }`}
                  />
                </div>
                
                <h3 className="text-2xl font-syne font-bold mb-3">
                  {collection.title}
                </h3>
                
                <p className="text-gray-200 opacity-90">
                  {collection.description}
                </p>

                {/* Hover Effect */}
                <div className={`
                  absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300
                  ${hoveredCard === collection.id ? 'opacity-100' : 'opacity-0'}
                `}>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-20 h-20 rounded-full bg-white bg-opacity-20 animate-pulse-slow" />
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
