import { EyeIcon, UsersIcon, SparklesIcon } from 'lucide-react';
export const PhilosophySection = () => {
  return <section className="relative py-20 min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cosmic-purple via-deep-blue to-sunset-purple" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-syne font-bold mb-6 text-shadow-glow">
            Philosophy
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Philosophy Content */}
          <div className="space-y-8">
            <div className="glass-effect p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <SparklesIcon size={32} className="text-mystic-pink mr-4" />
                <h3 className="text-2xl font-syne font-bold">Transcending Boundaries</h3>
              </div>
              <p className="text-lg leading-relaxed opacity-90">
                ALAG embodies fluidity and the beauty of transcending labels, roles, and expectations. 
                We champion individuality but recognize that true transformation occurs when unique minds unite.
              </p>
            </div>

            <div className="glass-effect p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <UsersIcon size={32} className="text-tribal-orange mr-4" />
                <h3 className="text-2xl font-syne font-bold">Collective Consciousness</h3>
              </div>
              <p className="text-lg leading-relaxed opacity-90">
                ALAG is a collective consciousness—an ever-evolving thought and movement where 
                individual brilliance merges with shared vision.
              </p>
            </div>
          </div>

          {/* About ALAG */}
          <div className="space-y-8">
            <div className="glass-effect p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <EyeIcon size={32} className="text-soft-cyan mr-4" />
                <h3 className="text-2xl font-syne font-bold">About aलg</h3>
              </div>
              <div className="space-y-4 text-lg leading-relaxed opacity-90">
                <p>aलg
 represents the extraordinary—breaking free from the conventional. We are more than just a brand; we are a statement of individualism, flourishing within a shared collective consciousness.</p>
                <p>
                  This is a space where you are free to define yourself, yet always 
                  supported by a community that shares your journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};