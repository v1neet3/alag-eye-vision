
import { useState } from 'react';
import { EyeIcon, SendIcon } from 'lucide-react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section className="relative py-20 min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-purple to-deep-blue" />
      
      {/* Floating Iris Animation */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="relative">
          <div className="w-96 h-96 rounded-full bg-gradient-to-br from-mystic-pink to-tribal-orange animate-pulse-slow" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <EyeIcon size={150} className="text-white animate-iris-shift" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-syne font-bold mb-6 text-shadow-glow">
            Connect & Collaborate
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to expand consciousness together? Reach out and let's create 
            something that transcends ordinary perception.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                className={`
                  w-full px-6 py-4 rounded-xl glass-effect border-2 transition-all duration-300
                  placeholder-gray-400 text-white bg-transparent
                  ${focusedField === 'name' 
                    ? 'border-mystic-pink shadow-lg shadow-mystic-pink/20' 
                    : 'border-gray-600 hover:border-gray-500'
                  }
                `}
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className={`
                  w-full px-6 py-4 rounded-xl glass-effect border-2 transition-all duration-300
                  placeholder-gray-400 text-white bg-transparent
                  ${focusedField === 'email' 
                    ? 'border-mystic-pink shadow-lg shadow-mystic-pink/20' 
                    : 'border-gray-600 hover:border-gray-500'
                  }
                `}
                required
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Share your vision..."
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                className={`
                  w-full px-6 py-4 rounded-xl glass-effect border-2 transition-all duration-300
                  placeholder-gray-400 text-white bg-transparent resize-none
                  ${focusedField === 'message' 
                    ? 'border-mystic-pink shadow-lg shadow-mystic-pink/20' 
                    : 'border-gray-600 hover:border-gray-500'
                  }
                `}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-mystic-pink to-tribal-orange text-white font-syne font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-mystic-pink/30 flex items-center justify-center gap-3"
            >
              <SendIcon size={20} />
              Send Message
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-16 border-t border-gray-700">
          <p className="text-gray-400 mb-4">
            © 2024 ALAG. A Brand Not Confined to Consciousness, But Embracing All.
          </p>
          <div className="flex items-center justify-center gap-2">
            <EyeIcon size={16} className="text-mystic-pink animate-pulse" />
            <span className="text-sm text-gray-500">Designed with awareness</span>
            <EyeIcon size={16} className="text-mystic-pink animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};
