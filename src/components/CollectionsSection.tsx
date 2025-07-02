
import { useState } from 'react';
import { EyeIcon, ImageIcon, PaletteIcon, BrainIcon, SkullIcon, BookOpenIcon } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const collections = [
  {
    id: 1,
    title: "Cosmic Consciousness",
    description: "Explore the depths of universal awareness through digital art",
    icon: EyeIcon,
    color: "from-cosmic-purple to-mystic-pink",
    image: "/lovable-uploads/f9a41e0a-fa52-4373-8d37-8fbbac1a78eb.png"
  },
  {
    id: 2,
    title: "Psychedelic Visions",
    description: "Journey through colorful dimensions of perception",
    icon: PaletteIcon,
    color: "from-tribal-orange to-sunset-purple",
    image: "/lovable-uploads/eea58492-9067-4115-bab3-6208a6cc202d.png"
  },
  {
    id: 3,
    title: "Neural Networks",
    description: "Where consciousness meets technology",
    icon: BrainIcon,
    color: "from-soft-cyan to-cosmic-purple",
    image: "/lovable-uploads/92eae4d5-ad33-4ab8-a8bf-4cffcc897984.png"
  },
  {
    id: 4,
    title: "Radiant Eye",
    description: "The all-seeing vision of enlightenment",
    icon: EyeIcon,
    color: "from-red-500 to-blue-600",
    image: "/lovable-uploads/251e1a18-b56e-4f64-bf3e-dd04a4461e55.png"
  },
  {
    id: 5,
    title: "Infinite Patterns",
    description: "Exploring the geometry of consciousness",
    icon: ImageIcon,
    color: "from-pink-500 to-purple-600",
    image: "/lovable-uploads/7fa1480c-f100-4ad9-9291-1c6f6ccf2617.png"
  },
  {
    id: 6,
    title: "Shadowed Forms",
    description: "The duality of light and darkness within",
    icon: SkullIcon,
    color: "from-red-600 to-black",
    image: "/lovable-uploads/36686e48-9250-4ae4-9b22-9a15b61c46e0.png"
  },
  {
    id: 7,
    title: "Metamorphic Beings",
    description: "Transformations of the inner self",
    icon: PaletteIcon,
    color: "from-green-500 to-purple-500",
    image: "/lovable-uploads/53767090-6759-4a3b-a17f-9c603c52174d.png"
  },
  {
    id: 8,
    title: "Sacred Knowledge",
    description: "Wisdom preserved in artistic form",
    icon: BookOpenIcon,
    color: "from-amber-600 to-orange-400",
    image: "/lovable-uploads/b78b3dbe-9b1c-4ceb-a21b-30cbb873c3fc.png"
  }
];

export const CollectionsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  console.log('CollectionsSection rendering, collections count:', collections.length);

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
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 mb-8">
              Discover our curated collections and artistic endeavors. From unique art pieces to exclusive collections, 
              ALAG showcases creativity and innovation. Dive into a world where art meets individuality and explore 
              our offerings that break the conventional mold.
            </p>
            <p className="text-lg text-gray-400">
              Each piece is a window into different dimensions of consciousness, 
              crafted to awaken the observer's inner vision.
            </p>
          </div>
        </div>

        {/* Auto-sliding Immersive Carousel */}
        <div className="relative max-w-6xl mx-auto overflow-hidden">
          <Carousel
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            opts={{
              align: "center",
              loop: true,
              skipSnaps: false,
              dragFree: false,
            }}
            className="w-full"
          >
            <CarouselContent className="flex gap-6 ml-0 -mx-3">
              {collections.map((collection) => (
                <CarouselItem key={collection.id} className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 flex-shrink-0 px-3">
                  <div
                    className="group relative overflow-hidden rounded-2xl glass-effect cursor-pointer transition-all duration-1000 hover:scale-105 hover:shadow-2xl hover:shadow-mystic-pink/30 h-96 transform-gpu"
                    onMouseEnter={() => setHoveredCard(collection.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img 
                        src={collection.image} 
                        alt={collection.title}
                        className="w-full h-full object-cover transition-all duration-1500 group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-110"
                        onLoad={() => console.log('Image loaded:', collection.image)}
                        onError={() => console.error('Image failed to load:', collection.image)}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${collection.color} opacity-40 transition-all duration-700 group-hover:opacity-70`} />
                    </div>

                    {/* Content Overlay */}
                    <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                      <div className={`transform transition-all duration-700 ${
                        hoveredCard === collection.id ? 'translate-y-0 opacity-100 scale-105' : 'translate-y-4 opacity-90 scale-100'
                      }`}>
                        <div className="mb-4">
                          <collection.icon 
                            size={32} 
                            className={`transition-all duration-700 ${
                              hoveredCard === collection.id ? 'animate-pulse scale-125 text-white drop-shadow-lg' : 'text-gray-200'
                            }`}
                          />
                        </div>
                        
                        <h3 className={`text-xl font-syne font-bold mb-2 transition-all duration-700 ${
                          hoveredCard === collection.id ? 'text-white text-shadow-glow scale-105' : 'text-gray-100'
                        }`}>
                          {collection.title}
                        </h3>
                        
                        <p className={`text-sm transition-all duration-700 ${
                          hoveredCard === collection.id ? 'text-gray-100 opacity-100' : 'text-gray-300 opacity-80'
                        }`}>
                          {collection.description}
                        </p>
                      </div>

                      {/* Enhanced Hover Glow Effect */}
                      <div className={`
                        absolute inset-0 pointer-events-none transition-all duration-1000
                        ${hoveredCard === collection.id 
                          ? 'bg-gradient-radial from-white/15 via-mystic-pink/5 to-transparent opacity-100' 
                          : 'opacity-0'
                        }
                      `} />
                      
                      {/* Subtle pulse overlay for depth */}
                      <div className={`
                        absolute inset-0 pointer-events-none transition-all duration-1500
                        ${hoveredCard === collection.id 
                          ? 'bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-100' 
                          : 'opacity-0'
                        }
                      `} />
                    </div>

                    {/* Enhanced Border Glow on Hover */}
                    <div className={`
                      absolute inset-0 rounded-2xl transition-all duration-700
                      ${hoveredCard === collection.id 
                        ? 'ring-2 ring-mystic-pink/60 ring-offset-2 ring-offset-transparent shadow-2xl shadow-mystic-pink/20' 
                        : ''
                      }
                    `} />

                    {/* Floating Elements with enhanced animation */}
                    <div className={`
                      absolute top-4 right-4 w-2 h-2 bg-mystic-pink rounded-full transition-all duration-700
                      ${hoveredCard === collection.id ? 'animate-pulse opacity-100 scale-150' : 'opacity-0'}
                    `} />
                    <div className={`
                      absolute bottom-8 left-4 w-1 h-1 bg-soft-cyan rounded-full transition-all duration-1000 delay-300
                      ${hoveredCard === collection.id ? 'animate-pulse opacity-100 scale-150' : 'opacity-0'}
                    `} />
                    <div className={`
                      absolute top-1/3 left-4 w-1.5 h-1.5 bg-tribal-orange rounded-full transition-all duration-1200 delay-500
                      ${hoveredCard === collection.id ? 'animate-pulse opacity-80 scale-125' : 'opacity-0'}
                    `} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
