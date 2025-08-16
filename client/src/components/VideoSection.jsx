import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
    console.log('Video play initiated');
  };

  return (
    <motion.section 
      className="py-32 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            See Findit in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how our community comes together to reunite lost items with their owners every day.
          </p>
        </motion.div>
        
        <motion.div 
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative bg-black rounded-3xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center relative">
              <img 
                src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=675" 
                alt="App demonstration video thumbnail" 
                className="w-full h-full object-cover"
                data-testid="img-video-thumbnail"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <motion.button 
                  onClick={handlePlayVideo}
                  className="w-24 h-24 glassmorphism rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ 
                    boxShadow: [
                      "0 0 20px rgba(99, 102, 241, 0.5)",
                      "0 0 30px rgba(99, 102, 241, 0.8)",
                      "0 0 20px rgba(99, 102, 241, 0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  data-testid="button-play-video"
                >
                  <Play className="text-white text-2xl ml-1" />
                </motion.button>
              </div>
              
              {/* Glassmorphism overlay */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 glassmorphism p-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-2">How It Works</h3>
                <p className="text-white/80">
                  Simple, fast, and effective. Join thousands helping their neighbors every day.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
